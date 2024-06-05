import { QFYApiResponse } from '@/lib/qfy-api-response';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { DocumentDownloadsService } from './document-downloads.service';
import { CreateDocumentDownloadDto } from './dto/create-document-download.dto';
import { UpdateDocumentDownloadDto } from './dto/update-document-download.dto';

@Controller('document-downloads')
export class DocumentDownloadsController {
  constructor(
    private readonly documentDownloadsService: DocumentDownloadsService,
  ) {}

  @Post()
  async create(@Body() createDocumentDownloadDto: CreateDocumentDownloadDto) {
    const data = await this.documentDownloadsService.create(
      createDocumentDownloadDto,
    );
    return QFYApiResponse.create({
      code: 200,
      data: data,
      desc: '',
    });
  }

  @Get()
  findAll() {
    return this.documentDownloadsService.findAll();
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
