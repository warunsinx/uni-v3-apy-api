import { BadRequestException, Injectable } from '@nestjs/common';
import { GetPoolDto } from '../pool/dtos/getPool.dto';
import { PoolService } from 'src/pool/pool.service';
import { request, gql } from 'graphql-request';
import configuration from 'src/config/configuration';
import { ethers } from 'ethers';
import { calculateAPY } from 'src/utils/calculateAPY';

@Injectable()
export class ApyService {
  constructor(private readonly poolService: PoolService) {}

  async getApy(getPoolDto: GetPoolDto) {
    const pool = this.poolService.getPool(getPoolDto);

    if (!pool) {
      throw new BadRequestException('Pool not found');
    }

    const provider = new ethers.JsonRpcProvider(
      configuration().chain.ethereum.rpc_url,
    );

    const blockNumber = await provider.getBlockNumber();

    const last24hrsBlock =
      +blockNumber - +configuration().chain.ethereum.block_time * 60 * 60 * 24;

    const document = gql`
      query QueryPoolData {
        pool(
          id: "${getPoolDto.poolAddress}"
          block: { number_gte: ${last24hrsBlock} }
        ) {
          totalValueLockedToken0,
          totalValueLockedToken1
          feesUSD,
          feeTier,
          volumeToken0
          volumeToken1
        }
      }
    `;

    const res = (await request(
      configuration().chain.ethereum.uniswap_v3_subgraph_endpoint,
      document,
    )) as unknown as {
      pool: {
        totalValueLockedToken0: string;
        totalValueLockedToken1: string;
        feesUSD: string;
        feeTier: string;
        volumeToken0: string;
        volumeToken1: string;
      };
    };

    const poolData = res.pool;

    return calculateAPY(
      {
        feeTier: poolData.feeTier,
        volumeToken0: poolData.volumeToken0,
        volumeToken1: poolData.volumeToken1,
      },
      {
        totalValueLockedToken0: +poolData.totalValueLockedToken0,
        totalValueLockedToken1: +poolData.totalValueLockedToken1,
      },
    );
  }
}
