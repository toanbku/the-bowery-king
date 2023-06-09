import { useGetLatestBlock } from "@/api/use-get-latest-block";
import { CHAIN_DETAIL, DEFAULT_CHAIN_LOGO } from "@/utils/constants";
import { Loading } from "./Loading";
import Image from "next/image";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { toast } from "react-hot-toast";

export const LatestBlock = ({
  chainName,
  mappingData,
}: {
  chainName: string;
  mappingData: (data: any) => any[];
}) => {
  const {
    data: response,
    isLoading,
    refetch,
    isRefetching,
  } = useGetLatestBlock({ chainName });

  const renderChildren = () => {
    if (isLoading) {
      return <Loading numberLine={5} />;
    }

    return (
      <div className="relative overflow-x-auto min-h-[180px]">
        {response ? (
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <tbody>
              {mappingData(response)
                ?.filter((item) => item.value)
                .map((item) => (
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
    <div className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h5 className="flex justify-between items-center mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        <div className="flex items-center gap-1 md:gap-[6px] ">
          <div className="relative w-[26px] h-[26px]">
            <Image
              fill
              src={CHAIN_DETAIL[chainName].logo || DEFAULT_CHAIN_LOGO}
              className="object-contain"
              alt={CHAIN_DETAIL[chainName].name}
            />
          </div>
          {CHAIN_DETAIL[chainName].name}
        </div>
        <div>
          <button onClick={handleRefetching}>
            <ArrowPathIcon
              className={classNames({ "animate-spin": isRefetching })}
              width={20}
              height={20}
            />
          </button>
        </div>
      </h5>

      {renderChildren()}
    </div>
  );
};
