import { useGetLatestBlock } from "@/api/use-get-latest-block";
import { EvmBlock } from "@/types/evm-block";
import { CHAIN_DETAIL, DEFAULT_CHAIN_LOGO } from "@/utils/constants";
import { useEffect, useState } from "react";
import { Loading } from "./Loading";
import Image from "next/image";

export const LatestBlock = ({
  chainName,
  mappingData,
}: {
  chainName: string;
  mappingData: (data: any) => any[];
}) => {
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
      return <Loading numberLine={5} />;
    }

    return (
      <div className="relative overflow-x-auto min-h-[180px]">
        {response ? (
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <tbody>
              {mappingData(response)?.map((item) => (
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
      <h5 className="flex items-center gap-1 mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        <Image
          src={CHAIN_DETAIL[chainName].logo || DEFAULT_CHAIN_LOGO}
          width={26}
          height={26}
          className="rounded-full"
          alt={CHAIN_DETAIL[chainName].name}
        />
        {CHAIN_DETAIL[chainName].name}
      </h5>
      {renderChildren()}
    </div>
  );
};
