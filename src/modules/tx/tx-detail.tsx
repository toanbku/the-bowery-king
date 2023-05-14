import { useSearchTxn } from "@/api/use-search-txn";
import { Loading } from "@/components/Loading";
import { TxnSearchResult } from "@/components/TxnSearchResult";
import { ISearchResult } from "@/types/search-result";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const TxDetailPage = ({ tx }: { tx: string }) => {
  const { mutateAsync: searchTxn, isLoading } = useSearchTxn({
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const [searchResult, setSearchResult] = useState<ISearchResult | null>();

  useEffect(() => {
    (async () => {
      if (tx) {
        const response: ISearchResult = await searchTxn(tx);
        setSearchResult(response);
      }
    })();
  }, [searchTxn, tx]);

  const renderChildren = () => {
    if (isLoading) {
      return <Loading numberLine={6} />;
    }

    return searchResult ? (
      <TxnSearchResult data={searchResult} />
    ) : (
      <span className="text-red-500">
        Not found, please try with another transaction hash
      </span>
    );
  };

  return (
    <div className="w-full flex flex-col gap-6 p-4">
      <h1 className="break-all">
        Results for <span className="font-bold">{tx}</span>
      </h1>
      {renderChildren()}
    </div>
  );
};
