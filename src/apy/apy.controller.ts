import { Controller, Get, Query } from '@nestjs/common';
import { GetPoolDto } from '../pool/dtos/getPool.dto';
import { ApyService } from './apy.service';

@Controller('apy')
export class ApyController {
  constructor(private readonly apyService: ApyService) {}

  @Get()
  getAPY(@Query() getPoolDto: GetPoolDto) {
    return this.apyService.getApy(getPoolDto);
  }
}
