export default () => ({
  database: {
    connection_url: process.env.MONGODB_URI,
  },
  subgrpah: {
    uniswap_v3_endpoint:
      process.env.UNISWAP_V3_ENDPOINT ||
      'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3',
  },
  chain: {
    ethereum: {
      rpc_url: process.env.ETHEREUM_RPC_URL || 'https://eth.llamarpc.com',
      block_time: process.env.ETHEREUM_BLOCK_TIME || 12,
    },
  },
});
