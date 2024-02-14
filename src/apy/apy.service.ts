import { Injectable } from '@nestjs/common';
import { GetPoolDto } from '../pool/dtos/getPool.dto';
import { PoolService } from 'src/pool/pool.service';

@Injectable()
export class ApyService {
  constructor(private readonly poolService: PoolService) {}

  getApy(getPoolDto: GetPoolDto) {
    const pool = this.poolService.getPool(getPoolDto);
    return pool;
  }
}
