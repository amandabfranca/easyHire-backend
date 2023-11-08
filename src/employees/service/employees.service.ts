// src/employees/employees.service.ts
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmployeeDTO } from '../dto/employee.dto';

import { DocumentDTO } from '../dto/document.dto';
import { EmployeeEntity } from '../entities/employee.entity';
import { PersonalEntity } from '../entities/personal.entity';
import { DocumentEntity } from '../entities/document.entity';
import { EmployeeDocumentType } from '../enums/documentType.enum';


@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(EmployeeEntity)
    private employeeRepository: Repository<EmployeeEntity>,
    @InjectRepository(PersonalEntity)
    private personalDataRepository: Repository<PersonalEntity>,
    @InjectRepository(DocumentEntity)
    private documentRepository: Repository<DocumentEntity>,


  ) { }

  async create(employeeDTO: EmployeeDTO, document: DocumentDTO): Promise<EmployeeEntity> {
    const employeeExists = await this.isEmployeeExists(employeeDTO.cpf);
    if (employeeExists) {
      throw new HttpException('Employee with the same CPF already exists', HttpStatus.BAD_REQUEST);
    } else {

      const newPersonalData = this.personalDataRepository.create({
        name: employeeDTO.name,
        birth_date: employeeDTO.birthDate,
        cpf: employeeDTO.cpf,
        email: employeeDTO.email,
        phone_number: employeeDTO.phoneNumber,
        street: employeeDTO.address.street,
        number: employeeDTO.address.number,
        city: employeeDTO.address.city,
        state: employeeDTO.address.state,

      });
      await this.personalDataRepository.save(newPersonalData);

      //Criando e salvando os documentos
      this.createAndSaveDocuments(employeeDTO, newPersonalData);

      // Criando um novo funcionário e associando os dados pessoais e o documento
      const employee = this.employeeRepository.create({
        personal: newPersonalData,
        role: "GERENTE"
      });

      // Salvando o funcionário
      return this.employeeRepository.save(employee);
    }
  }


  async createAndSaveDocuments(employeeDTO: EmployeeDTO, newPersonalData: PersonalEntity) {
    const newEmploymentContract = this.documentRepository.create({
      document_type: EmployeeDocumentType.CONTRACT,
      personal: newPersonalData,
      content: employeeDTO.employmentContract
    });

    const newDocumentCpfRg = this.documentRepository.create({
      document_type: EmployeeDocumentType.CPF_RG,
      personal: newPersonalData,
      content: employeeDTO.cpfRgDocument
    });

    const newProofOfAddress = this.documentRepository.create({
      document_type: EmployeeDocumentType.PROOF_ADDRESS,
      personal: newPersonalData,
      content: employeeDTO.proofOfAddress
    });

    const newDocumentSchoolCurriculum = this.documentRepository.create({
      document_type: EmployeeDocumentType.SCHOOL_CURRICULUM,
      personal: newPersonalData,
      content: employeeDTO.schoolCurriculum
    });
    await this.documentRepository.save(newEmploymentContract);
    await this.documentRepository.save(newDocumentCpfRg);
    await this.documentRepository.save(newProofOfAddress);
    await this.documentRepository.save(newDocumentSchoolCurriculum);
  }

  async isEmployeeExists(cpf: string): Promise<PersonalEntity> {
    const existingEmployee = await this.personalDataRepository.findOne({
      where: { cpf: cpf },
    });
    return existingEmployee; // Retorna true se o funcionário existe, caso contrário, retorna false.
  }


  async findByCpf(cpf: string): Promise<PersonalEntity | undefined> {
    return await this.personalDataRepository.findOne({
      where: {
        cpf: cpf
      },
    });
  }

}
