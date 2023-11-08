import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeesController } from './controllers/employee.controller';
import {  EmployeeEntity } from './entities/employee.entity';
import { EmployeesService } from './service/employees.service';
import { PersonalEntity } from './entities/personal.entity';
import { DocumentEntity } from './entities/document.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EmployeeEntity, PersonalEntity, DocumentEntity])],
  providers: [EmployeesService],
  controllers: [EmployeesController],
})
export class EmployeesModule {}