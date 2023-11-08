import { DocumentDTO } from "../dto/document.dto";
import { EmployeeDTO } from "../dto/employee.dto";
import { DocumentEntity } from "../entities/document.entity";
import { EmployeeEntity } from "../entities/employee.entity";
import { PersonalEntity } from "../entities/personal.entity";

export abstract class EmployeeRepository {
    abstract create(dto: EmployeeDTO): Promise<EmployeeEntity>;    
}

export abstract class PersonalDataRepository {
    abstract create(dto: EmployeeDTO): Promise<PersonalEntity>;    
}

export abstract class DocumentRepository {
    abstract create(dto: DocumentDTO): Promise<DocumentEntity>;    
}