import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { PersonalEntity } from './personal.entity';

@Entity('employee')
export class EmployeeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  role: string;

  @ManyToOne(() => PersonalEntity, personal => personal.employees)
  personal: PersonalEntity;
}