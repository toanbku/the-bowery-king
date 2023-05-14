import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { FETCH_KEY } from "./fetch-key";
import { apiPaths } from "./api.paths";

type Opts = UseQueryOptions<any> & {
  onSuccess?: () => void;
  onError?: (err: any) => void;
  chainName: string;
};

export const useGetLatestBlock = (opts: Opts) => {
  const { onSuccess, onError, chainName } = opts;

  return useQuery(
    [FETCH_KEY.latestBlock, chainName],
    async () =>
      fetch(`${apiPaths.latestBlock}/${chainName}`, {
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
      refetchInterval: 1000 * 60, // 1 minute
    }
  );
};
