import { Module } from '@nestjs/common';

import { LawyersModule } from './lawyers/lawyers.module';

@Module({
  imports: [LawyersModule],
  exports: [LawyersModule],
})
export class MPModule {}
