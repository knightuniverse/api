import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateTtMiniAppDto } from './dto/create-tt-mini-app.dto';
import { UpdateTtMiniAppDto } from './dto/update-tt-mini-app.dto';
import { TtMiniAppsService } from './tt-mini-apps.service';

@Controller('tt-mini-apps')
export class TtMiniAppsController {
  constructor(private readonly ttMiniAppsService: TtMiniAppsService) {}

  @Post()
  create(@Body() createTtMiniAppDto: CreateTtMiniAppDto) {
    return this.ttMiniAppsService.create(createTtMiniAppDto);
  }

  @Get()
  async findAll(
    @Query('page') page: number,
    @Query('pageSize') pageSize: number,
  ) {
    const data = await this.ttMiniAppsService.findAll(page, pageSize);
    return {
      code: 200,
      data: data,
      desc: '',
    };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ttMiniAppsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTtMiniAppDto: UpdateTtMiniAppDto,
  ) {
    return this.ttMiniAppsService.update(+id, updateTtMiniAppDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ttMiniAppsService.remove(+id);
  }
}
