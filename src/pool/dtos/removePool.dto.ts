import { PartialType } from '@nestjs/mapped-types';
import { GetPoolDto } from 'src/apy/dto/getPool.dto';

export class RemovePoolDto extends PartialType(GetPoolDto) {}
