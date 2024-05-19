import { Test, TestingModule } from '@nestjs/testing';
import { TtMiniAppUserPhonesController } from './tt-mini-app-user-phones.controller';
import { TtMiniAppUserPhonesService } from './tt-mini-app-user-phones.service';

describe('TtMiniAppUserPhonesController', () => {
  let controller: TtMiniAppUserPhonesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TtMiniAppUserPhonesController],
      providers: [TtMiniAppUserPhonesService],
    }).compile();

    controller = module.get<TtMiniAppUserPhonesController>(TtMiniAppUserPhonesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
