import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DocumentDownloadsService } from './document-downloads.service';
import { CreateDocumentDownloadDto } from './dto/create-document-download.dto';
import { UpdateDocumentDownloadDto } from './dto/update-document-download.dto';

@Controller('document-downloads')
export class DocumentDownloadsController {
  constructor(private readonly documentDownloadsService: DocumentDownloadsService) {}

  @Post()
  create(@Body() createDocumentDownloadDto: CreateDocumentDownloadDto) {
    return this.documentDownloadsService.create(createDocumentDownloadDto);
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
  update(@Param('id') id: string, @Body() updateDocumentDownloadDto: UpdateDocumentDownloadDto) {
    return this.documentDownloadsService.update(+id, updateDocumentDownloadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.documentDownloadsService.remove(+id);
  }
}
