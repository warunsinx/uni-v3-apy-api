import { IsEthereumAddress } from 'class-validator';

export class AddPoolDto {
  @IsEthereumAddress()
  poolAddress: string;
}
