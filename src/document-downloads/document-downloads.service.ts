import { Injectable } from '@nestjs/common';
import { CreateDocumentDownloadDto } from './dto/create-document-download.dto';
import { UpdateDocumentDownloadDto } from './dto/update-document-download.dto';

@Injectable()
export class DocumentDownloadsService {
  create(createDocumentDownloadDto: CreateDocumentDownloadDto) {
    return 'This action adds a new documentDownload';
  }

  findAll() {
    return `This action returns all documentDownloads`;
  }

  findOne(id: number) {
    return `This action returns a #${id} documentDownload`;
  }

  update(id: number, updateDocumentDownloadDto: UpdateDocumentDownloadDto) {
    return `This action updates a #${id} documentDownload`;
  }

  remove(id: number) {
    return `This action removes a #${id} documentDownload`;
  }
}
