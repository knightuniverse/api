import { PRISMA_INJECTION_TOKEN, PrismaService } from '@/shared/prisma.service';
import { Inject, Injectable } from '@nestjs/common';
import { CreateDocumentDownloadDto } from './dto/create-document-download.dto';
import { UpdateDocumentDownloadDto } from './dto/update-document-download.dto';

@Injectable()
export class DocumentDownloadsService {
  constructor(@Inject(PRISMA_INJECTION_TOKEN) private prisma: PrismaService) {}

  async create(dto: CreateDocumentDownloadDto) {
    const { countryCode, documentId, phoneNumber, purePhoneNumber } = dto;
    const phone = await this.prisma.tTMiniAppUserPhone.create({
      data: {
        countryCode,
        phoneNumber,
        purePhoneNumber,
      },
    });
    const downloadRecord = await this.prisma.documentDownload.create({
      data: {
        documentId: parseInt(documentId, 10),
        phoneId: phone.id,
      },
    });
    return downloadRecord;
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
