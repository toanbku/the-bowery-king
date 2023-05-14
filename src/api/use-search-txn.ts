import { UseQueryOptions, useMutation, useQuery } from "@tanstack/react-query";
import { FETCH_KEY } from "./fetch-key";
import { apiPaths } from "./api.paths";

type Opts = UseQueryOptions<any> & {
  onSuccess?: () => void;
  onError?: (err: any) => void;
  txn: string;
};

export const useSearchTxn = (opts: Opts) => {
  const { onSuccess, onError, txn } = opts;

  return useQuery(
    [FETCH_KEY.search, txn],
    async () =>
      fetch(`${apiPaths.searchTxn}/${txn}`, {
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
