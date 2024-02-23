interface PoolData {
  volumeUSD: string;
  feeTier: string;
  totalValueLockedUSD: string;
}

export const getFeeTierPercentage = (tier: string): number => {
  if (tier === '100') return 0.01 / 100;
  if (tier === '500') return 0.05 / 100;
  if (tier === '3000') return 0.3 / 100;
  if (tier === '10000') return 1 / 100;
  return 0;
};

export function calculateAPY(poolData: PoolData) {
  // Base APY = (Trading Volume * Fee Tier) / TVL * 365
  const res =
    ((+poolData.volumeUSD * getFeeTierPercentage(poolData.feeTier)) /
      +poolData.totalValueLockedUSD) *
    365;
  return { apy: res };
}
