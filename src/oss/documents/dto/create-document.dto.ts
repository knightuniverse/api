import { IsNumber, IsString } from 'class-validator';

export class CreateDocumentDto {
  @IsNumber()
  organizationId: number;

  @IsString()
  href: string;

  @IsString()
  thumbnail: string;

  @IsString()
  title: string;
}
