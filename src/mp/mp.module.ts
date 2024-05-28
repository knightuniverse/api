import { Module } from '@nestjs/common';

import { LawyersModule } from './lawyers/lawyers.module';
import { DocumentsModule } from './documents/documents.module';

@Module({
  imports: [LawyersModule, DocumentsModule],
  exports: [LawyersModule],
})
export class MPModule {}
