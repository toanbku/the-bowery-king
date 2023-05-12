import { Search } from "@/components/Search";
import { useSearchTxn } from "@/api/use-search-txn";
import { Loading } from "@/components/Loading";
import { ISearchResult } from "@/types/search-result";
import { useState } from "react";
import { SearchResult } from "@/components/SearchResult";
import { toast } from "react-hot-toast";

export const HomePage = () => {
  const { mutateAsync: searchTxn, isLoading } = useSearchTxn({
    onError: (err) => {
      toast.error(err);
    },
  });
  const [searchResult, setSearchResult] = useState<ISearchResult | null>();
  const onSearch = async (hash: string) => {
    setSearchResult(null);
    // call request here

    const response: ISearchResult = await searchTxn(hash);
    setSearchResult(response);
  };

  return (
    <div className="w-full flex flex-col gap-6">
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Nodereal
        </span>{" "}
        Searching
      </h1>

      <Search onSearch={onSearch} />

      {isLoading ? <Loading /> : ""}

      {searchResult && <SearchResult data={searchResult} />}
    </div>
  );
};
