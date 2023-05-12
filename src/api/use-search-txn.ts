import { UseQueryOptions, useMutation } from "@tanstack/react-query";
import { FETCH_KEY } from "./fetch-key";
import { apiPaths } from "./api.paths";
import { checkStatus } from "./api.utils";

type Opts = UseQueryOptions<any> & {
  onSuccess?: () => void;
  onError?: (err: any) => void;
};

export const useSearchTxn = (opts: Opts = {}) => {
  const { onSuccess, onError } = opts;

  return useMutation(
    [FETCH_KEY.search],
    (txn: string) =>
      fetch(`${apiPaths.searchTxn}/${txn}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => checkStatus(response))
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
