import { Search } from "@/components/Search";
import { useRouter } from "next/router";
import { LatestBlock } from "./latest-block";

export const HomePage = () => {
  const router = useRouter();
  const onSearch = async (hash: string) => {
    router.push(`/tx/${hash}`);
  };

  return (
    <div className="w-full flex flex-col gap-6 p-4">
      <Search onSearch={onSearch} />
      <hr />
      <LatestBlock />
    </div>
  );
};
