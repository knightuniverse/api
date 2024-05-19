import { Test, TestingModule } from '@nestjs/testing';
import { TtMiniAppUserPhonesService } from './tt-mini-app-user-phones.service';

describe('TtMiniAppUserPhonesService', () => {
  let service: TtMiniAppUserPhonesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TtMiniAppUserPhonesService],
    }).compile();

    service = module.get<TtMiniAppUserPhonesService>(TtMiniAppUserPhonesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
