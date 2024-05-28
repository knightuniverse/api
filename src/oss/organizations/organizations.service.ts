import { PRISMA_INJECTION_TOKEN, PrismaService } from '@/shared/prisma.service';
import { Inject, Injectable } from '@nestjs/common';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';

@Injectable()
export class OrganizationsService {
  constructor(@Inject(PRISMA_INJECTION_TOKEN) private prisma: PrismaService) {}

  async create(data: CreateOrganizationDto) {
    return await this.prisma.organization.create({ data });
  }

  async findAll(
    args: Partial<{
      page: number;
      pageSize: number;
    }>,
  ) {
    const { page = 1, pageSize = 20, ...where } = args;
    const data = await this.prisma.organization.paginate({
      limit: pageSize,
      page,
      where,
    });
    return data;
  }

  async findOne(id: number) {
    return await this.prisma.organization.findFirst({ where: { id } });
  }

  async update(id: number, data: UpdateOrganizationDto) {
    return await this.prisma.organization.update({
      data: {
        ...data,
        updatedAt: new Date(),
      },
      where: { id },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} organization`;
  }
}
