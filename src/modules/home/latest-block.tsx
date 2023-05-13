import { EvmLatestBlock } from "@/components/EvmLatestBlock";
import { EVM_SUPPORTED_CHAIN } from "@/utils/constants";

export const LatestBlock = () => {
  const evmChainName = Object.keys(EVM_SUPPORTED_CHAIN);

  return (
    <div className="rounded-md p-4 w-full flex flex-col gap-4 md:gap-6 bg-gradient-to-r ">
      <h1>Latest Block</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
        {evmChainName.map((chainName) => (
          <EvmLatestBlock key={chainName} chainName={chainName} />
        ))}
      </div>
    </div>
  );
};
