export const API_URL = String(process.env.NEXT_PUBLIC_BACKEND_URL);

export const apiPaths = {
  latestBlock: API_URL + "/blocks/latest",
  searchTxn: API_URL + "/tx",
};
