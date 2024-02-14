import { Controller, Delete, Post } from '@nestjs/common';

@Controller('pool')
export class PoolController {
  @Post()
  addPool() {
    return '';
  }

  @Delete()
  removePool() {
    return '';
  }
}
