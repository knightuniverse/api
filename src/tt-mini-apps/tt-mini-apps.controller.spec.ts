import { Test, TestingModule } from '@nestjs/testing';
import { TtMiniAppsController } from './tt-mini-apps.controller';
import { TtMiniAppsService } from './tt-mini-apps.service';

describe('TtMiniAppsController', () => {
  let controller: TtMiniAppsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TtMiniAppsController],
      providers: [TtMiniAppsService],
    }).compile();

    controller = module.get<TtMiniAppsController>(TtMiniAppsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
