import { EvmTxn } from "@/types/evm-txn";
import { SolanaTxn, NearTxn } from "@/types/non-evm-txn";
import { ISearchResult } from "@/types/search-result";
import { CHAIN_DETAIL, DEFAULT_CHAIN_LOGO } from "@/utils/constants";
import { formatNumber, getDisplayGas } from "@/utils/format-number";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

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

const mappingEvmData = (data: EvmTxn) => {
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
      value: getDisplayGas(Number.parseInt(data.tx.value)),
    },
  ];
};

const mappingSolData = (data: SolanaTxn) => {
  return [
    {
      label: "Block",
      value: data.Slot,
    },
    {
      label: "Fee",
      value: data.Meta.Fee,
    },
    {
      label: "Transaction Version",
      value: data.Transaction.Message.Version,
    },
  ];
};

const mappingNearData = (data: NearTxn) => {
  return [
    {
      label: "Receipt Id",
      value: data.info.receipt_id,
    },
    {
      label: "Name",
      value: data.name,
    },
  ];
};

const mappingKlaytnData = (data: NearTxn) => {
  return [
    {
      label: "Receipt Id",
      value: data.info.receipt_id,
    },
    {
      label: "Name",
      value: data.name,
    },
  ];
};

export const TxnSearchResult = ({ data }: { data: ISearchResult }) => {
  const foundNumber = Object.keys(data).length;

  const mappingData = (chainName: string, data: any) => {
    if (chainName === "solana") {
      return mappingSolData(data);
    }

    if (chainName === "near") {
      return mappingNearData(data);
    }

    return mappingEvmData(data);
  };

  return (
    <div className="flex flex-col gap-4 md:gap-2">
      <div className="text-black">
        Found on <span className="font-bold text-green-500">{foundNumber}</span>{" "}
        chain
        {foundNumber > 1 ? "s" : ""}
      </div>
      <div className="flex flex-col gap-4 md:gap-6">
        {Object.keys(CHAIN_DETAIL)
          // @ts-ignore
          .filter((chainName: string) => !!data[chainName])
          .map((chainName) => (
            <div
              key={chainName}
              className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
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

              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <tbody>
                    {/* @ts-ignore */}
                    {mappingData(chainName, data[chainName]).map((item) => (
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