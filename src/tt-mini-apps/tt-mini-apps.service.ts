import { PRISMA_INJECTION_TOKEN, PrismaService } from '@/shared/prisma.service';
import { Inject, Injectable } from '@nestjs/common';
import { CreateTtMiniAppDto } from './dto/create-tt-mini-app.dto';
import { UpdateTtMiniAppDto } from './dto/update-tt-mini-app.dto';

@Injectable()
export class TtMiniAppsService {
  constructor(@Inject(PRISMA_INJECTION_TOKEN) private prisma: PrismaService) {}

  create(createTtMiniAppDto: CreateTtMiniAppDto) {
    return 'This action adds a new ttMiniApp';
  }

  async findAll(page = 1, pageSize = 20) {
    const data = await this.prisma.tTMiniApp.paginate({
      limit: pageSize,
      page,
    });
    return data;
  }

  findOne(id: number) {
    return `This action returns a #${id} ttMiniApp`;
  }

  update(id: number, updateTtMiniAppDto: UpdateTtMiniAppDto) {
    return `This action updates a #${id} ttMiniApp`;
  }

  remove(id: number) {
    return `This action removes a #${id} ttMiniApp`;
  }
}
