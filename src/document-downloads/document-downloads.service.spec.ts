import { Test, TestingModule } from '@nestjs/testing';
import { DocumentDownloadsService } from './document-downloads.service';

describe('DocumentDownloadsService', () => {
  let service: DocumentDownloadsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DocumentDownloadsService],
    }).compile();

    service = module.get<DocumentDownloadsService>(DocumentDownloadsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
