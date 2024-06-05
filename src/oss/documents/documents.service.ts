import { PRISMA_INJECTION_TOKEN, PrismaService } from '@/shared/prisma.service';
import { Inject, Injectable } from '@nestjs/common';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';

@Injectable()
export class DocumentsService {
  constructor(@Inject(PRISMA_INJECTION_TOKEN) private prisma: PrismaService) {}

  async create(dto: CreateDocumentDto) {
    const data = await this.prisma.document.create({
      data: dto,
    });
    return data;
  }

  async findAll(
    args: Partial<{
      organizationId: number;
      page: number;
      pageSize: number;
    }>,
  ) {
    const { page = 1, pageSize = 20, ...where } = args;
    const data = await this.prisma.document.paginate({
      limit: pageSize,
      page,
      where,
    });
    return data;
  }

  async findOne(id: number) {
    return await this.prisma.document.findFirst({ where: { id } });
  }

  update(id: number, updateDocumentDto: UpdateDocumentDto) {
    return `This action updates a #${id} document`;
  }

  remove(id: number) {
    return `This action removes a #${id} document`;
  }
}
