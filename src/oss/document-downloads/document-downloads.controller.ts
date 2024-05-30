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
import { DocumentDownloadsService } from './document-downloads.service';
import { CreateDocumentDownloadDto } from './dto/create-document-download.dto';
import { UpdateDocumentDownloadDto } from './dto/update-document-download.dto';

@Controller('oss/document-downloads')
export class DocumentDownloadsController {
  constructor(
    private readonly documentDownloadsService: DocumentDownloadsService,
  ) {}

  @Post()
  create(@Body() createDocumentDownloadDto: CreateDocumentDownloadDto) {
    return this.documentDownloadsService.create(createDocumentDownloadDto);
  }

  @Get()
  async findAll(
    @Query('documentId', ParseIntPipe) documentId: number,
    @Query('page', ParseIntPipe) page: number,
    @Query('pageSize', ParseIntPipe) pageSize: number,
  ) {
    const args = {
      page,
      pageSize,
    } as Record<string, any>;
    if (documentId > 0) {
      args.documentId = documentId;
    }
    const data = await this.documentDownloadsService.findAll(args);
    return QFYApiResponse.create({
      code: 200,
      data: data,
      desc: '',
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.documentDownloadsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDocumentDownloadDto: UpdateDocumentDownloadDto,
  ) {
    return this.documentDownloadsService.update(+id, updateDocumentDownloadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.documentDownloadsService.remove(+id);
  }
}
