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
import { CreateTtMiniAppUserDto } from './dto/create-tt-mini-app-user.dto';
import { UpdateTtMiniAppUserDto } from './dto/update-tt-mini-app-user.dto';
import { TtMiniAppUsersService } from './tt-mini-app-users.service';

@Controller('oss/tt-mini-app-users')
export class TtMiniAppUsersController {
  constructor(private readonly ttMiniAppUsersService: TtMiniAppUsersService) {}

  @Post()
  create(@Body() createTtMiniAppUserDto: CreateTtMiniAppUserDto) {
    return this.ttMiniAppUsersService.create(createTtMiniAppUserDto);
  }

  @Get()
  async findAll(
    @Query('page') page: number,
    @Query('pageSize') pageSize: number,
  ) {
    const data = await this.ttMiniAppUsersService.findAll(page, pageSize);
    return {
      code: 200,
      data: data,
      desc: '',
    };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ttMiniAppUsersService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTtMiniAppUserDto: UpdateTtMiniAppUserDto,
  ) {
    return this.ttMiniAppUsersService.update(+id, updateTtMiniAppUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ttMiniAppUsersService.remove(+id);
  }
}
