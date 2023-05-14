import { CHAIN_DETAIL, DEFAULT_CHAIN_LOGO } from "@/utils/constants";
import { Loading } from "./Loading";
import Image from "next/image";
import { toast } from "react-hot-toast";
import { useGetTotalTransactions } from "@/api/use-get-total-transactions";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";

export const TotalTransactions = ({ chainNames }: { chainNames: string[] }) => {
  const {
    data: response,
    isLoading,
    refetch,
    isRefetching,
  } = useGetTotalTransactions({ chainNames });

  const renderChildren = () => {
    if (isLoading) {
      return <Loading numberLine={7} />;
    }

    return (
      <div className="relative overflow-x-auto min-h-[180px]">
        {response ? (
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead>
              <tr>
                <th>Chain</th>
                <th>Number of transactions</th>
              </tr>
            </thead>
            <tbody>
              {chainNames.map((chainName, idx) => {
                return (
                  <tr
                    key={chainName}
                    className={classNames(
                      "border-b dark:bg-gray-800 dark:border-gray-700",
                      { hidden: !response[idx]?.data }
                    )}
                  >
                    <th
                      scope="row"
                      className="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <div className="flex items-center gap-1 md:gap-[6px] ">
                        <div className="relative w-[26px] h-[26px]">
                          <Image
                            fill
                            src={
                              CHAIN_DETAIL[chainName].logo || DEFAULT_CHAIN_LOGO
                            }
                            className="object-contain"
                            alt={CHAIN_DETAIL[chainName].name}
                          />
                        </div>
                        {CHAIN_DETAIL[chainName].name}
                      </div>
                    </th>
                    <td className="px-6 py-4">{response[idx]?.data}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <div className="text-red-500">
            Cannot get the latest block on this chain
          </div>
        )}
      </div>
    );
  };

  const handleRefetching = async () => {
    await refetch();
    toast.success("Success!");
  };

  return (
    <div className="rounded-md p-4 w-full flex flex-col gap-4 md:gap-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">
          Total Transactions in 24h
          <span className="ml-1 italic font-normal text-sm">
            (automatically update in 10 mins)
          </span>
        </h2>
        <div>
          <button onClick={handleRefetching}>
            <ArrowPathIcon
              className={classNames({ "animate-spin": isRefetching })}
              width={20}
              height={20}
            />
          </button>
        </div>
      </div>
      <div
        id="total-transactions"
        className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        {renderChildren()}
      </div>
    </div>
  );
};
