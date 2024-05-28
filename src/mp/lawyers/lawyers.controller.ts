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

@Controller('mp/lawyers')
export class LawyersController {
  constructor(private readonly lawyersService: LawyersService) {}

  @Post()
  create(@Body() createLawyerDto: CreateLawyerDto) {
    return this.lawyersService.create(createLawyerDto);
  }

  @Get()
  async findAll(@Query('organizationId', ParseIntPipe) organizationId: number) {
    const data = await this.lawyersService.findAll(organizationId);
    return QFYApiResponse.create({
      code: 200,
      data: data,
      desc: '',
    });
  }

  @Get('/featured')
  async featured(
    @Query('organizationId', ParseIntPipe) organizationId: number,
  ) {
    const data = await this.lawyersService.findAll(organizationId, {
      featured: 1,
    });
    return QFYApiResponse.create({
      code: 200,
      data: data,
      desc: '',
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lawyersService.findOne(+id);
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
