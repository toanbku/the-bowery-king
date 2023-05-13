export interface NearBlock {
  author: string;
  chunks: Chunk[];
  header: Header;
}

interface Header {
  approvals: (null | string)[];
  block_merkle_root: string;
  challenges_result: any[];
  challenges_root: string;
  chunk_headers_root: string;
  chunk_mask: boolean[];
  chunk_receipts_root: string;
  chunk_tx_root: string;
  chunks_included: number;
  epoch_id: string;
  gas_price: string;
  hash: string;
  height: number;
  last_ds_final_block: string;
  last_final_block: string;
  latest_protocol_version: number;
  next_bp_hash: string;
  next_epoch_id: string;
  outcome_root: string;
  prev_hash: string;
  prev_state_root: string;
  random_value: string;
  rent_paid: string;
  signature: string;
  timestamp: number;
  timestamp_nanosec: string;
  total_supply: string;
  validator_proposals: any[];
  validator_reward: string;
}

interface Chunk {
  balance_burnt: string;
  chunk_hash: string;
  encoded_length: number;
  encoded_merkle_root: string;
  gas_limit: number;
  gas_used: number;
  height_created: number;
  height_included: number;
  outcome_root: string;
  outgoing_receipts_root: string;
  prev_block_hash: string;
  prev_state_root: string;
  rent_paid: string;
  shard_id: number;
  signature: string;
  tx_root: string;
  validator_proposals: any[];
  validator_reward: string;
}

export interface SolanaBlock {
  Blockhash: string;
  BlockTime: number;
  BlockHeight: number;
  PreviousBlockhash: string;
  ParentSlot: number;
  Transactions: any[];
  Rewards?: any;
}

export interface KlaytnObject {
  baseFeePerGas: string;
  blockScore: string;
  extraData: string;
  gasUsed: string;
  governanceData: string;
  hash: string;
  logsBloom: string;
  number: string;
  parentHash: string;
  receiptsRoot: string;
  reward: string;
  size: string;
  stateRoot: string;
  timestamp: string;
  timestampFoS: string;
  totalBlockScore: string;
  transactions: string[];
  transactionsRoot: string;
  voteData: string;
}
