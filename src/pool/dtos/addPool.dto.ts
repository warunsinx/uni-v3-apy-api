import { PartialType } from '@nestjs/mapped-types';
import { GetPoolDto } from 'src/pool/dtos/getPool.dto';

export class AddPoolDto extends PartialType(GetPoolDto) {}
