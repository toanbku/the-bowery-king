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

  return (
    <div className="w-full flex flex-col gap-6">
      {isLoading ? (
        <Loading />
      ) : searchResult ? (
        <SearchResult data={searchResult} />
      ) : (
        <>Not found</>
      )}
    </div>
  );
};
