import { useGetLatestBlock } from "@/api/use-get-latest-block";
import { EvmBlock } from "@/types/evm-block";
import { EVM_SUPPORTED_CHAIN } from "@/utils/constants";
import { useEffect, useState } from "react";
import { formatDistance } from "date-fns";
import { formatNumber, getEvmGas } from "@/utils/format-number";
import { Loading } from "./Loading";

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

export const EvmLatestBlock = ({ chainName }: { chainName: string }) => {
  const { mutateAsync: getLatestBlock, isLoading } = useGetLatestBlock();

  const [response, setResponse] = useState<EvmBlock | null>(null);

  useEffect(() => {
    (async () => {
      const response = await getLatestBlock(chainName);
      setResponse(response);
    })();
  }, [chainName, getLatestBlock]);

  const renderChildren = () => {
    if (isLoading) {
      return <Loading />;
    }

    return (
      <div className="relative overflow-x-auto">
        {response ? (
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <tbody>
              {mappingEvmData(response)?.map((item) => (
                <tr
                  key={item.label}
                  className="border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.label}
                  </th>
                  <td className="px-6 py-4">{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div>Cannot get the latest block on this chain</div>
        )}
      </div>
    );
  };

  return (
    <div className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        {EVM_SUPPORTED_CHAIN[chainName]}
      </h5>
      {renderChildren()}
    </div>
  );
};
