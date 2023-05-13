import { EvmTxn } from "@/types/evm-txn";
import { ISearchResult } from "@/types/search-result";
import { CHAIN_DETAIL } from "@/utils/constants";
import { formatNumber, getEvmGas } from "@/utils/format-number";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";

const renderStatus = (status: number) => {
  if (status === 1) {
    return (
      <div className="flex gap-[2px] md:gap-1 items-center">
        <CheckCircleIcon className="w-4 h-4 text-green-400" />
        Success
      </div>
    );
  }

  return (
    <div className="flex gap-[2px] md:gap-1 items-center">
      <XCircleIcon className="w-4 h-4 text-red-400" />
      Failed
    </div>
  );
};

const mappingData = (data: EvmTxn) => {
  return [
    {
      label: "Transaction Hash",
      value: data.tx.hash,
    },
    {
      label: "Status",
      value: renderStatus(Number.parseInt(data.receipt.status)),
    },
    {
      label: "Block",
      value: Number.parseInt(data.receipt.blockNumber),
    },
    {
      label: "Block Hash",
      value: data.receipt.blockHash,
    },
    {
      label: "From",
      value: data.extra.from,
    },
    {
      label: "To",
      value: data.tx.to,
    },
    {
      label: "Gas Limit & Usage by Txn",
      value: (
        <div>
          {formatNumber(Number.parseInt(data.tx.gas))}
          <span className="mx-2 text-secondary">|</span>
          {formatNumber(Number.parseInt(data.receipt.gasUsed))} (
          {Number(
            (100 * Number.parseInt(data.receipt.gasUsed)) /
              Number.parseInt(data.tx.gas)
          ).toFixed(2)}
          %)
        </div>
      ),
    },
    {
      label: "Value",
      value: getEvmGas(Number.parseInt(data.tx.value)),
    },
  ];
};

export const SearchResult = ({ data }: { data: ISearchResult }) => {
  const evmSupportedChainName = Object.keys(CHAIN_DETAIL).filter(
    (item) => CHAIN_DETAIL[item].isEvm
  );

  const foundNumber = Object.keys(data).length;

  return (
    <div className="flex flex-col gap-4 md:gap-2">
      <div className="text-black">
        Found on <span className="font-bold text-green-500">{foundNumber}</span>{" "}
        chain
        {foundNumber > 1 ? "s" : ""}
      </div>
      <div className="flex flex-col gap-4 md:gap-6">
        {evmSupportedChainName
          // @ts-ignore
          .filter((chainName: string) => !!data[chainName])
          .map((chainName) => (
            <div
              key={chainName}
              className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {CHAIN_DETAIL[chainName].name}
              </h5>

              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <tbody>
                    {/* @ts-ignore */}
                    {mappingData(data[chainName]).map((item) => (
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
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
