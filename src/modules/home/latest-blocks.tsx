import { LatestBlock } from "@/components/LatestBlock";
import { EvmBlock } from "@/types/evm-block";
import { CHAIN_DETAIL } from "@/utils/constants";
import { formatNumber, getEvmGas } from "@/utils/format-number";
import { formatDistance } from "date-fns";

export const LatestBlocks = () => {
  const evmChainName = Object.keys(CHAIN_DETAIL).filter(
    (item) => CHAIN_DETAIL[item].isEvm
  );

  const mappingEvmData = (data: EvmBlock) => {
    if (!data) {
      return [];
    }

    const timestamp = Number.parseInt(data.timestamp);
    return [
      {
        label: "Block Height",
        value: Number.parseInt(data.number),
      },
      {
        label: "Timestamp",
        value: formatDistance(new Date(), new Date(timestamp * 1000), {
          addSuffix: true,
        }),
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
        value: getEvmGas(Number.parseInt(data.baseFeePerGas)),
      },
    ];
  };

  return (
    <div className="rounded-md p-4 w-full flex flex-col gap-4 md:gap-6 bg-gradient-to-r ">
      <h2 className="text-2xl font-semibold">Latest Block</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
        {evmChainName.map((chainName) => (
          <LatestBlock
            key={chainName}
            chainName={chainName}
            mappingData={mappingEvmData}
          />
        ))}
      </div>
    </div>
  );
};
