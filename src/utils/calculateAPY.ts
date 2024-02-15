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
  const feePercentage: number = parseFloat(poolData.feeTier) / 10000;
  const feesToken0: number = parseFloat(poolData.volumeToken0) * feePercentage;
  const feesToken1: number = parseFloat(poolData.volumeToken1) * feePercentage;
  const totalFees: number = feesToken0 + feesToken1;

  const totalValueLocked: number =
    historicalData.totalValueLockedToken0 +
    historicalData.totalValueLockedToken1;

  const apy: number = Math.pow(1 + totalFees / totalValueLocked, 365) - 1;
  return apy * 100;
}
