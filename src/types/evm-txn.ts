export interface EvmTxn {
  receipt: Receipt;
  tx: Tx;
  extra: Extra;
}

interface Extra {
  blockNumber: string;
  blockHash: string;
  from: string;
}

interface Tx {
  type: string;
  nonce: string;
  gasPrice: string;
  maxPriorityFeePerGas?: any;
  maxFeePerGas?: any;
  gas: string;
  value: string;
  input: string;
  v: string;
  r: string;
  s: string;
  to: string;
  hash: string;
}

interface Receipt {
  root: string;
  status: string;
  cumulativeGasUsed: string;
  logsBloom: string;
  logs: Log[];
  transactionHash: string;
  contractAddress: string;
  gasUsed: string;
  blockHash: string;
  blockNumber: string;
  transactionIndex: string;
}

interface Log {
  address: string;
  topics: string[];
  data: string;
  blockNumber: string;
  transactionHash: string;
  transactionIndex: string;
  blockHash: string;
  logIndex: string;
  removed: boolean;
}
