import { PartialType } from '@nestjs/mapped-types';
import { AddPoolDto } from './addPool.dto';

export class RemovePoolDto extends PartialType(AddPoolDto) {}
