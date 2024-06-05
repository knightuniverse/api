import { PartialType } from '@nestjs/swagger';
import { CreateDocumentDownloadDto } from './create-document-download.dto';

export class UpdateDocumentDownloadDto extends PartialType(CreateDocumentDownloadDto) {}
