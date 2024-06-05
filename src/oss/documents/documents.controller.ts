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
import { DocumentsService } from './documents.service';
import { CreateDocumentDto } from './dto/create-document.dto';
import { FindManyQueryDto } from './dto/find-many.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';

@Controller('oss/documents')
export class DocumentsController {
  constructor(private readonly documentsService: DocumentsService) {}

  @Post()
  async create(@Body() dto: CreateDocumentDto) {
    const data = await this.documentsService.create(dto);
    return QFYApiResponse.create({
      code: 200,
      data: data,
      desc: '',
    });
  }

  @Get()
  async findAll(@Query() query: FindManyQueryDto) {
    const { organizationId, page = '1', pageSize = '20' } = query;
    const args: Record<string, any> = {
      page: parseInt(page, 10),
      pageSize: parseInt(pageSize, 10),
    };
    if (organizationId) {
      args.organizationId = parseInt(organizationId, 10);
    }
    const data = await this.documentsService.findAll(args);
    return QFYApiResponse.create({
      code: 200,
      data: data,
      desc: '',
    });
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const data = await this.documentsService.findOne(id);
    return QFYApiResponse.create({
      code: 200,
      data: data,
      desc: '',
    });
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDocumentDto: UpdateDocumentDto,
  ) {
    await this.documentsService.update(id, updateDocumentDto);
    return QFYApiResponse.create({
      code: 200,
      data: {},
      desc: '',
    });
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.documentsService.remove(+id);
  }
}
