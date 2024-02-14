import { Controller, Get, Query } from '@nestjs/common';

@Controller('apy')
export class ApyController {
  @Get()
  getAPY(@Query('poolAddress') poolAddress) {
    console.log(poolAddress);
    return '200 OK';
  }
}
