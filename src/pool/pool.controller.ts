import { Body, Controller, Delete, Post } from '@nestjs/common';
import { AddPoolDto } from './dtos/addPool.dto';
import { RemovePoolDto } from './dtos/removePool.dto';
import { PoolService } from './pool.service';

@Controller('pool')
export class PoolController {
  constructor(private readonly poolService: PoolService) {}

  @Post()
  addPool(@Body() addPoolDto: AddPoolDto) {
    return this.poolService.addPool(addPoolDto);
  }

  @Delete()
  removePool(@Body() removePoolDto: RemovePoolDto) {
    return this.poolService.removePool(removePoolDto);
  }
}
