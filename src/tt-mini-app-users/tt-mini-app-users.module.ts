import { Module } from '@nestjs/common';
import { TtMiniAppUsersService } from './tt-mini-app-users.service';
import { TtMiniAppUsersController } from './tt-mini-app-users.controller';

@Module({
  controllers: [TtMiniAppUsersController],
  providers: [TtMiniAppUsersService],
})
export class TtMiniAppUsersModule {}
