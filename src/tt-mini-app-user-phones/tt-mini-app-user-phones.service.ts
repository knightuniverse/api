import { PRISMA_INJECTION_TOKEN, PrismaService } from '@/shared/prisma.service';
import { Inject, Injectable } from '@nestjs/common';
import { CreateTtMiniAppUserPhoneDto } from './dto/create-tt-mini-app-user-phone.dto';
import { UpdateTtMiniAppUserPhoneDto } from './dto/update-tt-mini-app-user-phone.dto';

@Injectable()
export class TtMiniAppUserPhonesService {
  constructor(@Inject(PRISMA_INJECTION_TOKEN) private prisma: PrismaService) {}

  create(createTtMiniAppUserPhoneDto: CreateTtMiniAppUserPhoneDto) {
    return 'This action adds a new ttMiniAppUserPhone';
  }

  async findAll(page = 1, pageSize = 20) {
    const data = await this.prisma.tTMiniAppUserPhone.paginate({
      limit: pageSize,
      page,
    });
    return data;
  }

  findOne(id: number) {
    return `This action returns a #${id} ttMiniAppUserPhone`;
  }

  update(id: number, updateTtMiniAppUserPhoneDto: UpdateTtMiniAppUserPhoneDto) {
    return `This action updates a #${id} ttMiniAppUserPhone`;
  }

  remove(id: number) {
    return `This action removes a #${id} ttMiniAppUserPhone`;
  }
}
