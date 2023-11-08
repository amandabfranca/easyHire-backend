import { IsString, IsNotEmpty, IsBase64 } from 'class-validator';

export class DocumentDTO {
  @IsString()
  @IsNotEmpty()
  document_type: string;

  @IsString()
  @IsNotEmpty()
  @IsBase64()
  content: string;
}