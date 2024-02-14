import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { ApyModule } from './apy/apy.module';
import { PoolModule } from './pool/pool.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.development.local',
      load: [configuration],
      isGlobal: true,
    }),
    MongooseModule.forRoot(configuration().database.connection_url),
    ApyModule,
    PoolModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
