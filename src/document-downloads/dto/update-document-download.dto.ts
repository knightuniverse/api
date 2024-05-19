import { PartialType } from '@nestjs/mapped-types';
import { CreateDocumentDownloadDto } from './create-document-download.dto';

export class UpdateDocumentDownloadDto extends PartialType(CreateDocumentDownloadDto) {}
