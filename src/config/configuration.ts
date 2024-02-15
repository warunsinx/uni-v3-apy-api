export default () => ({
  database: {
    connection_url: process.env.MONGODB_URI,
  },
  chain: {
    ethereum: {
      rpc_url: process.env.ETHEREUM_RPC_URL || 'https://eth.llamarpc.com',
      block_time: process.env.ETHEREUM_BLOCK_TIME || 12,
      uniswap_v3_subgraph_endpoint:
        process.env.UNISWAP_V3_SUBGRAPH_ENDPOINT ||
        'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3',
    },
  },
});
