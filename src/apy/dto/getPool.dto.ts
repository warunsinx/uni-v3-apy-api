import { IsEthereumAddress, IsNotEmpty } from 'class-validator';

export class GetPoolDto {
  @IsNotEmpty()
  @IsEthereumAddress()
  poolAddress: string;
}
