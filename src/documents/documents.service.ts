import { PRISMA_INJECTION_TOKEN, PrismaService } from '@/shared/prisma.service';
import { Inject, Injectable } from '@nestjs/common';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';

@Injectable()
export class DocumentsService {
  constructor(@Inject(PRISMA_INJECTION_TOKEN) private prisma: PrismaService) {}

  create(createDocumentDto: CreateDocumentDto) {
    return 'This action adds a new document';
  }

  async findAll(page = 1, pageSize = 20) {
    const data = await this.prisma.document.paginate({
      limit: pageSize,
      page,
    });
    return data;
  }

  findOne(id: number) {
    return `This action returns a #${id} document`;
  }

  update(id: number, updateDocumentDto: UpdateDocumentDto) {
    return `This action updates a #${id} document`;
  }

  remove(id: number) {
    return `This action removes a #${id} document`;
  }
}
