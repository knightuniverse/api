import { Test, TestingModule } from '@nestjs/testing';
import { TtMiniAppsService } from './tt-mini-apps.service';

describe('TtMiniAppsService', () => {
  let service: TtMiniAppsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TtMiniAppsService],
    }).compile();

    service = module.get<TtMiniAppsService>(TtMiniAppsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
