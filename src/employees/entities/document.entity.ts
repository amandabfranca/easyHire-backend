import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { PersonalEntity } from './personal.entity';


@Entity('document')
export class DocumentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  document_type: string;

  @Column('bytea')
  content: Buffer;

  @ManyToOne(() => PersonalEntity, personal => personal.documents)
  personal: PersonalEntity;
}