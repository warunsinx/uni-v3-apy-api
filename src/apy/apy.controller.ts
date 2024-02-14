import { Controller, Get } from '@nestjs/common';

@Controller('apy')
export class ApyController {
  @Get()
  getAPY() {
    return '';
  }
}
