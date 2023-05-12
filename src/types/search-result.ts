import { EvmTxn } from "./evm-txn";

export type ISearchResult = {
  bsc?: EvmTxn;
  eth?: EvmTxn;
  polygon?: EvmTxn;
};
