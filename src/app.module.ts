import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApyModule } from './apy/apy.module';
import { PoolModule } from './pool/pool.module';

@Module({
  imports: [ApyModule, PoolModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
