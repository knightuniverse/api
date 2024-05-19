import { Test, TestingModule } from '@nestjs/testing';
import { TtMiniAppUsersController } from './tt-mini-app-users.controller';
import { TtMiniAppUsersService } from './tt-mini-app-users.service';

describe('TtMiniAppUsersController', () => {
  let controller: TtMiniAppUsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TtMiniAppUsersController],
      providers: [TtMiniAppUsersService],
    }).compile();

    controller = module.get<TtMiniAppUsersController>(TtMiniAppUsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
