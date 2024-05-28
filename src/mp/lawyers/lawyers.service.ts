import { PRISMA_INJECTION_TOKEN, PrismaService } from '@/shared/prisma.service';
import { Inject, Injectable } from '@nestjs/common';
import { CreateLawyerDto } from './dto/create-lawyer.dto';
import { UpdateLawyerDto } from './dto/update-lawyer.dto';

@Injectable()
export class LawyersService {
  constructor(@Inject(PRISMA_INJECTION_TOKEN) private prisma: PrismaService) {}

  create(createLawyerDto: CreateLawyerDto) {
    return 'This action adds a new lawyer';
  }

  async findAll(
    organizationId: number,
    where: Partial<{
      featured: 0 | 1;
    }> = {},
  ) {
    return await this.prisma.lawyer.paginate({
      limit: 2,
      page: 1,
      where: { organizationId, ...where },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} lawyer`;
  }

  update(id: number, updateLawyerDto: UpdateLawyerDto) {
    return `This action updates a #${id} lawyer`;
  }

  remove(id: number) {
    return `This action removes a #${id} lawyer`;
  }
}
