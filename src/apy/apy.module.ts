import { Module } from '@nestjs/common';
import { ApyController } from './apy.controller';
import { ApyService } from './apy.service';
import { PoolModule } from 'src/pool/pool.module';

@Module({
  imports: [PoolModule],
  controllers: [ApyController],
  providers: [ApyService],
})
export class ApyModule {}
