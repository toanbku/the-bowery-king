import { EvmTxn } from "@/types/evm-txn";
import { ISearchResult } from "@/types/search-result";
import { SUPPORTED_CHAIN } from "@/utils/constants";

const mappingData = (data: EvmTxn) => {
  return [
    {
      label: "Transaction Hash",
      value: data.transactionHash,
    },
    {
      label: "Transaction Index",
      value: data.transactionIndex,
    },
    {
      label: "Block",
      value: data.blockNumber,
    },
    {
      label: "Block Hash",
      value: data.blockHash,
    },
    {
      label: "Contract Address",
      value: data.contractAddress,
    },
    {
      label: "Gas Used",
      value: data.gasUsed,
    },
  ];
};

export const SearchResult = ({ data }: { data: ISearchResult }) => {
  const supportedChainName = Object.keys(SUPPORTED_CHAIN);

  const foundNumber = Object.keys(data).length;

  return (
    <div className="flex flex-col gap-4 md:gap-2">
      <div>
        Found on <span className="font-bold text-green-500">{foundNumber}</span>{" "}
        chain
        {foundNumber > 1 ? "s" : ""}
      </div>
      <div className="flex flex-col gap-4 md:gap-6">
        {supportedChainName
          // @ts-ignore
          .filter((chainName: string) => !!data[chainName])
          .map((chainName) => (
            <div
              key={chainName}
              className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {SUPPORTED_CHAIN[chainName]}
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
