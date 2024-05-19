import { Test, TestingModule } from '@nestjs/testing';
import { TtMiniAppUsersService } from './tt-mini-app-users.service';

describe('TtMiniAppUsersService', () => {
  let service: TtMiniAppUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TtMiniAppUsersService],
    }).compile();

    service = module.get<TtMiniAppUsersService>(TtMiniAppUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
