import { Test, TestingModule } from '@nestjs/testing';
import { DocumentDownloadsController } from './document-downloads.controller';
import { DocumentDownloadsService } from './document-downloads.service';

describe('DocumentDownloadsController', () => {
  let controller: DocumentDownloadsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DocumentDownloadsController],
      providers: [DocumentDownloadsService],
    }).compile();

    controller = module.get<DocumentDownloadsController>(DocumentDownloadsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
