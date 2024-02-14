import { Controller, Get, Query } from '@nestjs/common';
import { GetPoolDto } from './dto/getPool.dto';

@Controller('apy')
export class ApyController {
  @Get()
  getAPY(@Query() poolAddress: GetPoolDto) {
    console.log(poolAddress);
    return '200 OK';
  }
}
