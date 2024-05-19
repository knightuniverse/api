import { Module } from '@nestjs/common';
import { DocumentDownloadsService } from './document-downloads.service';
import { DocumentDownloadsController } from './document-downloads.controller';

@Module({
  controllers: [DocumentDownloadsController],
  providers: [DocumentDownloadsService],
})
export class DocumentDownloadsModule {}
