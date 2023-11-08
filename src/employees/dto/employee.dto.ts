// src/employees/dto/employee.dto.ts
import { IsString, IsDate, IsEmail, IsPhoneNumber, IsObject } from 'class-validator';
import { AddressDTO } from './address.dto';

export class EmployeeDTO {
  @IsString()
  name: string;

  @IsDate()
  birthDate: Date;

  @IsString()
  cpf: string;

  @IsEmail()
  email: string;

  @IsPhoneNumber('BR')
  phoneNumber: string;

  @IsObject()
  address: AddressDTO;

  @IsObject()
  employmentContract: Buffer

  @IsObject()
  cpfRgDocument: Buffer

  @IsObject()
  proofOfAddress: Buffer

  @IsObject()
  schoolCurriculum: Buffer

}
