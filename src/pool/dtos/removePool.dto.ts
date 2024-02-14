import { PartialType } from '@nestjs/mapped-types';
import { GetPoolDto } from 'src/pool/dtos/getPool.dto';

export class RemovePoolDto extends PartialType(GetPoolDto) {}
