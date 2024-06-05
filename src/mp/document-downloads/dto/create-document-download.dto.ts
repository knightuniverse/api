import { IsNotEmpty, IsNumberString, IsString } from 'class-validator';

export class CreateDocumentDownloadDto {
  // @IsString()
  // encryptedData: string;

  @IsString()
  @IsNotEmpty()
  countryCode: string;

  @IsNumberString()
  @IsNotEmpty()
  documentId: string;

  @IsString()
  @IsNotEmpty()
  phoneNumber: string;

  @IsString()
  @IsNotEmpty()
  purePhoneNumber: string;
}
