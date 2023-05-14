import { TotalTransactions } from "@/components/TotalTransactions";
import { CHAIN_DETAIL } from "@/utils/constants";

export const TotalTransactions24h = () => {
  return (
    <div className="rounded-md p-4 w-full flex flex-col gap-4 md:gap-6">
      <h2 className="text-2xl font-semibold">Total Transactions in 24h</h2>
      <span>
        <TotalTransactions
          chainNames={Object.keys(CHAIN_DETAIL).filter(
            (chain) => CHAIN_DETAIL[chain].enableTotalTxn
          )}
        />
      </span>
    </div>
  );
};
