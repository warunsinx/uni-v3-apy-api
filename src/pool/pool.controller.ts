import { Body, Controller, Delete, Post } from '@nestjs/common';
import { AddPoolDto } from './dtos/addPool.dto';
import { RemovePoolDto } from './dtos/removePool.dto';

@Controller('pool')
export class PoolController {
  @Post()
  addPool(@Body() addPoolDto: AddPoolDto) {
    console.log(addPoolDto);
    return '200 OK';
  }

  @Delete()
  removePool(@Body() removePoolDto: RemovePoolDto) {
    console.log(removePoolDto);
    return '200 OK';
  }
}
