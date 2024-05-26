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
  create(@Body() createLawyerDto: CreateLawyerDto) {
    return this.lawyersService.create(createLawyerDto);
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
  update(@Param('id') id: string, @Body() updateLawyerDto: UpdateLawyerDto) {
    return this.lawyersService.update(+id, updateLawyerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lawyersService.remove(+id);
  }
}
