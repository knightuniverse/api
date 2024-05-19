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

  async findAll(page = 1, pageSize = 20) {
    const data = await this.prisma.lawyer.paginate({
      limit: pageSize,
      page,
    });
    return data;
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
