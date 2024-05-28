import { PRISMA_INJECTION_TOKEN, PrismaService } from '@/shared/prisma.service';
import { Inject, Injectable } from '@nestjs/common';
import { CreateLawyerDto } from './dto/create-lawyer.dto';
import { UpdateLawyerDto } from './dto/update-lawyer.dto';

@Injectable()
export class LawyersService {
  constructor(@Inject(PRISMA_INJECTION_TOKEN) private prisma: PrismaService) {}

  async create(data: CreateLawyerDto) {
    return await this.prisma.lawyer.create({ data });
  }

  async findAll(
    args: Partial<{
      page: number;
      pageSize: number;
    }>,
  ) {
    const { page = 1, pageSize = 20, ...where } = args;
    const data = await this.prisma.lawyer.paginate({
      limit: pageSize,
      page,
      where,
      include: {
        organization: true,
      },
    });
    return data;
  }

  async findOne(id: number) {
    return await this.prisma.lawyer.findFirst({ where: { id } });
  }

  async update(id: number, data: UpdateLawyerDto) {
    return await this.prisma.lawyer.update({
      data: {
        ...data,
        updatedAt: new Date(),
      },
      where: { id },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} lawyer`;
  }
}
