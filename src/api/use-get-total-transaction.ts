import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { FETCH_KEY } from "./fetch-key";
import { apiPaths } from "./api.paths";

type Opts = UseQueryOptions<any> & {
  onSuccess?: () => void;
  onError?: (err: any) => void;
  chain: string;
};

export const useGetTotalTransaction = (opts: Opts) => {
  const { onSuccess, onError, chain } = opts;

  return useQuery(
    [FETCH_KEY.latestBlock],
    async () =>
      fetch(`${apiPaths.totalTxn}/${chain}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response?.json?.())
        .then((response) => response?.data),
    {
      onSuccess: (data) => {
        if (onSuccess instanceof Function) {
          onSuccess(data);
        }
      },
      onError: (error) => {
        if (onError instanceof Function) {
          onError(error);
        }
      },
    }
  );
};
