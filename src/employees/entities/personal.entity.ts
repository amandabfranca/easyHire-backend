import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { EmployeeEntity } from './employee.entity';
import { DocumentEntity } from './document.entity';
import { validate } from 'cpf-check'; // Importe a função de validação de CPF

@Entity('personal')
export class PersonalEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column('date')
  birth_date: Date;

  @Column({ length: 11 })
  cpf: string;

  @Column({ length: 255 })
  email: string;

  @Column({ length: 20 })
  phone_number: string;

  @Column({ length: 255 })
  street: string;

  @Column({ length: 10 })
  number: string;

  @Column({ length: 100 })
  city: string;

  @Column({ length: 50 })
  state: string;

  @OneToMany(() => EmployeeEntity, employee => employee.personal)
  employees: EmployeeEntity[];

  @OneToMany(() => DocumentEntity, document => document.personal)
  documents: DocumentEntity[];
 
}