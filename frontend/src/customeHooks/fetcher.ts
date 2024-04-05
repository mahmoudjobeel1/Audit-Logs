import config from "../config";
import useSWR from "swr";

export type Params = {
  [key: string]: string;
};

const fetcher = (url: string, options?: RequestInit) =>
  fetch(url, options).then((res) => res.json());

const filterParams = (obj: { [key: string]: any }) => {
  const filteredParams: { [key: string]: any } = {};
  Object.keys(obj).forEach((key) => {
    if (obj[key] !== null && obj[key] !== undefined && obj[key] !== "") {
      filteredParams[key] = obj[key];
    }
  });
  return filteredParams;
};

export const useDataFetcher = (
  url: string,
  method: string,
  body?: BodyInit,
  params?: Params
) => {

  const cleanParams = filterParams(params || {});

  const queryString = params ? new URLSearchParams(cleanParams).toString() : "";
  const fullUrl = `${config.BACKEND_HOST + url}${
    queryString ? `?${queryString}` : ""
  }`;

  console.log(fullUrl);
  const options: RequestInit = {
    method,
    ...(body && { body }),
  };
  const { data, error } = useSWR(fullUrl, () => fetcher(fullUrl, options));
  return { data, error };
};
