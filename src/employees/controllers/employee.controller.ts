// src/employees/employees.controller.ts
import {
  Controller,
  Post,
  Get,
  Param,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { EmployeeDTO } from '../dto/employee.dto';
import { EmployeeEntity } from '../entities/employee.entity';
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

  /* @Get()
  async findAll(): Promise<EmployeeEntity[]> {
    return this.employeesService.findAll();
  } */

  @Get(':cpf')
  async findByCpf(@Param('cpf') cpf: string): Promise<PersonalEntity | undefined> {
    const personalEntity = await this.employeesService.findByCpf(cpf);
    return personalEntity;
  }
}
