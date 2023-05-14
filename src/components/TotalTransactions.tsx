import { CHAIN_DETAIL, DEFAULT_CHAIN_LOGO } from "@/utils/constants";
import { Loading } from "./Loading";
import Image from "next/image";
import { toast } from "react-hot-toast";
import { useGetTotalTransactions } from "@/api/use-get-total-transactions";

export const TotalTransactions = ({ chainNames }: { chainNames: string[] }) => {
  const {
    data: response,
    isLoading,
    refetch,
    isRefetching,
  } = useGetTotalTransactions({ chainNames });

  console.log(response);

  const renderChildren = () => {
    if (isLoading) {
      return <Loading numberLine={5} />;
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
              {chainNames.map((chainName, idx) => (
                <tr
                  key={chainName}
                  className="border-b dark:bg-gray-800 dark:border-gray-700"
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
              ))}
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
    <div
      id="total-transactions"
      className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      {renderChildren()}
    </div>
  );
};
