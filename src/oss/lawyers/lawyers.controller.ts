import { QFYApiResponse } from '@/lib/qfy-api-response';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateLawyerDto } from './dto/create-lawyer.dto';
import { UpdateLawyerDto } from './dto/update-lawyer.dto';
import { LawyersService } from './lawyers.service';

@Controller('oss/lawyers')
export class LawyersController {
  constructor(private readonly lawyersService: LawyersService) {}

  @Post()
  async create(@Body() dto: CreateLawyerDto) {
    const data = await this.lawyersService.create(dto);
    return QFYApiResponse.create({
      code: 200,
      data: data,
      desc: '',
    });
  }

  @Get()
  async findAll(
    @Query('page', ParseIntPipe) page: number,
    @Query('pageSize', ParseIntPipe) pageSize: number,
  ) {
    const data = await this.lawyersService.findAll(page, pageSize);
    return QFYApiResponse.create({
      code: 200,
      data: data,
      desc: '',
    });
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const data = await this.lawyersService.findOne(id);
    return QFYApiResponse.create({
      code: 200,
      data: data,
      desc: '',
    });
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateLawyerDto: UpdateLawyerDto,
  ) {
    await this.lawyersService.update(id, updateLawyerDto);
    return QFYApiResponse.create({
      code: 200,
      data: {},
      desc: '',
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lawyersService.remove(+id);
  }
}
