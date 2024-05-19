import { Module } from '@nestjs/common';
import { TtMiniAppsService } from './tt-mini-apps.service';
import { TtMiniAppsController } from './tt-mini-apps.controller';

@Module({
  controllers: [TtMiniAppsController],
  providers: [TtMiniAppsService],
})
export class TtMiniAppsModule {}
