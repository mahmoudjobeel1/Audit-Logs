import config from "../config";
import useSWR from "swr";

type Params = {
  [key: string]: string;
};

const fetcher = (url: string, options?: RequestInit) =>
  fetch(url, options).then((res) => res.json());

export const useDataFetcher = (
  url: string,
  method: string,
  body?: BodyInit,
  params?: Params
) => {
  const queryString = params ? new URLSearchParams(params).toString() : "";
  const fullUrl = `${config.BACKEND_HOST + url}${
    queryString ? `?${queryString}` : ""
  }`;
  const options: RequestInit = {
    method,
    ...(body && { body }),
  };
  const { data, error } = useSWR(fullUrl, () => fetcher(fullUrl, options));
  return { data, error };
};
