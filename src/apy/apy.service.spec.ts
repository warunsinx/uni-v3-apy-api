import { Test, TestingModule } from '@nestjs/testing';
import { ApyService } from './apy.service';

describe('ApyService', () => {
  let service: ApyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApyService],
    }).compile();

    service = module.get<ApyService>(ApyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
