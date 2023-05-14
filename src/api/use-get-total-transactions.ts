import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { FETCH_KEY } from "./fetch-key";
import { apiPaths } from "./api.paths";

type Opts = UseQueryOptions<any> & {
  onSuccess?: () => void;
  onError?: (err: any) => void;
  chainNames: string[];
};

export const useGetTotalTransactions = (opts: Opts) => {
  const { onSuccess, onError, chainNames } = opts;

  return useQuery(
    [FETCH_KEY.latestBlock],
    async () => {
      const data = await Promise.all(
        chainNames.map((chainName) =>
          fetch(`${apiPaths.totalTxn}/${chainName}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          })
        )
      );
      const ext = await Promise.all(
        data.map(async (res) => {
          return await res.json();
        })
      );

      return ext;
    },
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
