import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pool } from 'src/schemas/pool.schema';
import { AddPoolDto } from './dtos/addPool.dto';
import { RemovePoolDto } from './dtos/removePool.dto';
import { GetPoolDto } from 'src/pool/dtos/getPool.dto';

@Injectable()
export class PoolService {
  constructor(@InjectModel(Pool.name) private poolModel: Model<Pool>) {}

  async getPool(getPoolDto: GetPoolDto) {
    return this.poolModel.findOne(getPoolDto);
  }

  async addPool(addPoolDto: AddPoolDto) {
    const pool = await this.getPool(addPoolDto);
    if (pool) throw new BadRequestException('Pool already exists');
    const newPool = new this.poolModel(addPoolDto);
    return newPool.save();
  }

  async removePool(removePoolDto: RemovePoolDto) {
    const pool = await this.getPool(removePoolDto);
    if (!pool) throw new BadRequestException('Pool does not exist');
    return this.poolModel.deleteOne(removePoolDto);
  }
}
