import { LatestBlock } from "@/components/LatestBlock";
import { EvmBlock } from "@/types/evm-block";
import { KlaytnObject, NearBlock, SolanaBlock } from "@/types/non-evm-block";
import { CHAIN_DETAIL } from "@/utils/constants";
import { formatNumber, getDisplayGas } from "@/utils/function";
// import { formatDistance } from "date-fns";

export const LatestBlocks = () => {
  const evmChainName = Object.keys(CHAIN_DETAIL).filter(
    (item) => CHAIN_DETAIL[item].isEvm
  );

  const mappingEvmBlockData = (data: EvmBlock) => {
    if (!data) {
      return [];
    }

    return [
      {
        label: "Block Height",
        value: Number.parseInt(data.number),
      },
      {
        label: "Gas Used",
        value: formatNumber(Number.parseInt(data.gasUsed)),
      },
      {
        label: "Gas Limit",
        value: formatNumber(Number.parseInt(data.gasLimit)),
      },
      {
        label: "Base Fee Per Gas",
        value: getDisplayGas(Number.parseInt(data.baseFeePerGas)),
      },
    ];
  };

  const mappingNearBlockData = (data: NearBlock) => {
    if (!data) {
      return [];
    }

    return [
      { label: "Block Height", value: data.header.height },
      { label: "Author", value: data.author },
      { label: "Hash", value: data.header.hash },
    ];
  };

  const mappingSolanaBlockData = (data: SolanaBlock) => {
    if (!data) {
      return [];
    }

    return [
      { label: "Block Height", value: data.BlockHeight },
      { label: "Hash", value: data.Blockhash },
    ];
  };

  const mappingKlaytnBlockData = (data: KlaytnObject) => {
    return [
      { label: "Block Height", value: Number.parseInt(data.number) },
      { label: "Hash", value: data.hash },
      {
        label: "Base Fee",
        value: getDisplayGas(Number.parseInt(data.baseFeePerGas), 18),
      },
    ];
  };

  return (
    <div
      id="latest-blocks"
      className="rounded-md p-4 w-full flex flex-col gap-4 md:gap-6"
    >
      <h2 className="text-2xl font-semibold">
        Latest Block
        <span className="ml-1 italic font-normal text-sm">
          (automatically update in 1 min)
        </span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {evmChainName.map((chainName) => (
          <LatestBlock
            key={chainName}
            chainName={chainName}
            mappingData={mappingEvmBlockData}
          />
        ))}
        <LatestBlock chainName="near" mappingData={mappingNearBlockData} />
        <LatestBlock chainName="solana" mappingData={mappingSolanaBlockData} />
        <LatestBlock chainName="klaytn" mappingData={mappingKlaytnBlockData} />
      </div>
    </div>
  );
};
