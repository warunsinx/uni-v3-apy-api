import { Transform } from 'class-transformer';
import { IsEthereumAddress, IsNotEmpty } from 'class-validator';

export class GetPoolDto {
  @IsNotEmpty()
  @IsEthereumAddress()
  @Transform(({ value }) => value.toLowerCase())
  poolAddress: string;
}
