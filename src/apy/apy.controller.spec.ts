import { Test, TestingModule } from '@nestjs/testing';
import { ApyController } from './apy.controller';

describe('ApyController', () => {
  let controller: ApyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApyController],
    }).compile();

    controller = module.get<ApyController>(ApyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
