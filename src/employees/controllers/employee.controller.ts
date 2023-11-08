import {
  Controller,
  Post,
  Get,
  Param,
  Body,
} from '@nestjs/common';
import { EmployeeDTO } from '../dto/employee.dto';
import { EmployeesService } from '../service/employees.service';
import { DocumentDTO } from '../dto/document.dto';
import { PersonalEntity } from '../entities/personal.entity';


@Controller('employees')
export class EmployeesController {
  constructor(private employeesService: EmployeesService) {}

  @Post()
  async create(@Body() employeeDTO: EmployeeDTO, document: DocumentDTO) {
      try {
          return this.employeesService.create(employeeDTO, document);
      } catch (error) {
          return { message: error.message }; 
      }
  }  

  @Get(':cpf')
  async findByCpf(@Param('cpf') cpf: string): Promise<PersonalEntity | undefined> {
    const personalEntity = await this.employeesService.findByCpf(cpf);
    return personalEntity;
  }
}
