import { Module } from '@nestjs/common';
import { TtMiniAppUserPhonesService } from './tt-mini-app-user-phones.service';
import { TtMiniAppUserPhonesController } from './tt-mini-app-user-phones.controller';

@Module({
  controllers: [TtMiniAppUserPhonesController],
  providers: [TtMiniAppUserPhonesService],
})
export class TtMiniAppUserPhonesModule {}
