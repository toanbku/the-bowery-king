import { Search } from "@/components/Search";
import { useSearchTxn } from "@/api/use-search-txn";
import { Loading } from "@/components/Loading";

export const HomePage = () => {
  const { mutateAsync: searchTxn, isLoading } = useSearchTxn();
  const onSearch = async (hash: string) => {
    // call request here

    const response = await searchTxn(hash);
    console.log(response);
  };

  return (
    <div className="w-fit flex flex-col gap-6">
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Nodereal
        </span>{" "}
        Searching
      </h1>

      <Search onSearch={onSearch} />

      {isLoading ? <Loading /> : ""}
    </div>
  );
};
