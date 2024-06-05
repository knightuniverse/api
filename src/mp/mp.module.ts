import { Module } from '@nestjs/common';

import { LawyersModule } from './lawyers/lawyers.module';
import { DocumentsModule } from './documents/documents.module';
import { DocumentDownloadsModule } from './document-downloads/document-downloads.module';

@Module({
  imports: [LawyersModule, DocumentsModule, DocumentDownloadsModule],
  exports: [LawyersModule],
})
export class MPModule {}
