import { PRISMA_INJECTION_TOKEN, PrismaService } from '@/shared/prisma.service';
import { Inject, Injectable } from '@nestjs/common';
import { CreateTtMiniAppUserDto } from './dto/create-tt-mini-app-user.dto';
import { UpdateTtMiniAppUserDto } from './dto/update-tt-mini-app-user.dto';

@Injectable()
export class TtMiniAppUsersService {
  constructor(@Inject(PRISMA_INJECTION_TOKEN) private prisma: PrismaService) {}

  create(createTtMiniAppUserDto: CreateTtMiniAppUserDto) {
    return 'This action adds a new ttMiniAppUser';
  }

  async findAll(page = 1, pageSize = 20) {
    const data = await this.prisma.tTMiniAppUser.paginate({
      limit: pageSize,
      page,
    });
    return data;
  }

  findOne(id: number) {
    return `This action returns a #${id} ttMiniAppUser`;
  }

  update(id: number, updateTtMiniAppUserDto: UpdateTtMiniAppUserDto) {
    return `This action updates a #${id} ttMiniAppUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} ttMiniAppUser`;
  }
}
