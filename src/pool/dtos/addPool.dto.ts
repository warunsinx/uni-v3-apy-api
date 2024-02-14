import { PartialType } from '@nestjs/mapped-types';
import { GetPoolDto } from 'src/apy/dto/getPool.dto';

export class AddPoolDto extends PartialType(GetPoolDto) {}
