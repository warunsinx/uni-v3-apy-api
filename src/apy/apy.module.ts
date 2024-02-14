import { Module } from '@nestjs/common';
import { ApyController } from './apy.controller';
import { ApyService } from './apy.service';

@Module({
  controllers: [ApyController],
  providers: [ApyService]
})
export class ApyModule {}
