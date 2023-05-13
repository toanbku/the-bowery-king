import { useSearchTxn } from "@/api/use-search-txn";
import { Loading } from "@/components/Loading";
import { SearchResult } from "@/components/SearchResult";
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
      return <Loading />;
    }

    return searchResult ? (
      <SearchResult data={searchResult} />
    ) : (
      <>Not found, please try again</>
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
