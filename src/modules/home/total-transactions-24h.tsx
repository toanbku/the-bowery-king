import { TotalTransactions } from "@/components/TotalTransactions";
import { CHAIN_DETAIL } from "@/utils/constants";

export const TotalTransactions24h = () => {
  return (
    <TotalTransactions
      chainNames={Object.keys(CHAIN_DETAIL).filter(
        (chain) => CHAIN_DETAIL[chain].enableTotalTxn
      )}
    />
  );
};
