interface PoolData {
  feeTier: string;
  volumeToken0: string;
  volumeToken1: string;
}

interface HistoricalData {
  totalValueLockedToken0: number;
  totalValueLockedToken1: number;
}

export function calculateAPY(
  poolData: PoolData,
  historicalData: HistoricalData,
): number {
  //fee = feeTier * volume24H * (deltaLiquiudit / (L + deltaLiquidity))
  const fee =
    parseFloat(poolData.feeTier) *
    parseFloat(poolData.volumeToken0) *
    (parseFloat(poolData.volumeToken0) /
      (historicalData.totalValueLockedToken0 +
        parseFloat(poolData.volumeToken0)));
  //APY = fee * 365 / (L + deltaLiquidity)
  return (fee * 365) / historicalData.totalValueLockedToken0;
}
