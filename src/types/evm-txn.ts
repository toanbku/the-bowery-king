export interface EvmTxn {
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

export interface Log {
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
