import { PRISMA_INJECTION_TOKEN, PrismaService } from '@/shared/prisma.service';
import { Inject, Injectable } from '@nestjs/common';
import { CreateDocumentDownloadDto } from './dto/create-document-download.dto';
import { UpdateDocumentDownloadDto } from './dto/update-document-download.dto';

@Injectable()
export class DocumentDownloadsService {
  constructor(@Inject(PRISMA_INJECTION_TOKEN) private prisma: PrismaService) {}

  create(createDocumentDownloadDto: CreateDocumentDownloadDto) {
    return 'This action adds a new documentDownload';
  }

  async findAll(
    args: Partial<{
      documentId: number;
      page: number;
      pageSize: number;
    }>,
  ) {
    const { page = 1, pageSize = 20, ...where } = args;
    const data = await this.prisma.documentDownload.paginate({
      limit: pageSize,
      page,
      where,
      include: {
        doc: true,
        phone: true,
      },
    });
    return data;
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
