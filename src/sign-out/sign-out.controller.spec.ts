import { Test, TestingModule } from '@nestjs/testing';
import { SignOutController } from './sign-out.controller';
import { SignOutService } from './sign-out.service';

describe('SignOutController', () => {
  let controller: SignOutController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SignOutController],
      providers: [SignOutService],
    }).compile();

    controller = module.get<SignOutController>(SignOutController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
