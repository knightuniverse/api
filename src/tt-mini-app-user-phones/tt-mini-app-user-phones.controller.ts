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
import { CreateTtMiniAppUserPhoneDto } from './dto/create-tt-mini-app-user-phone.dto';
import { UpdateTtMiniAppUserPhoneDto } from './dto/update-tt-mini-app-user-phone.dto';
import { TtMiniAppUserPhonesService } from './tt-mini-app-user-phones.service';

@Controller('tt-mini-app-user-phones')
export class TtMiniAppUserPhonesController {
  constructor(
    private readonly ttMiniAppUserPhonesService: TtMiniAppUserPhonesService,
  ) {}

  @Post()
  create(@Body() createTtMiniAppUserPhoneDto: CreateTtMiniAppUserPhoneDto) {
    return this.ttMiniAppUserPhonesService.create(createTtMiniAppUserPhoneDto);
  }

  @Get()
  async findAll(
    @Query('page') page: number,
    @Query('pageSize') pageSize: number,
  ) {
    const data = await this.ttMiniAppUserPhonesService.findAll(page, pageSize);
    return {
      code: 200,
      data: data,
      desc: '',
    };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ttMiniAppUserPhonesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTtMiniAppUserPhoneDto: UpdateTtMiniAppUserPhoneDto,
  ) {
    return this.ttMiniAppUserPhonesService.update(
      +id,
      updateTtMiniAppUserPhoneDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ttMiniAppUserPhonesService.remove(+id);
  }
}
