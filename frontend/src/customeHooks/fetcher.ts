import config from "../config";

export type Params = {
  [key: string]: string | number;
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

export const fetchData = async (
  endpoint: string,
  method: string = 'GET',
  body?: BodyInit,
  params?: Params
) => {

  const cleanParams = filterParams(params || {});
  const queryString = Object.keys(cleanParams).length
    ? `?${new URLSearchParams(cleanParams)}`
    : '';

  const fullUrl = `${config.BACKEND_HOST}${endpoint}${queryString}`;
  const options: RequestInit = {
    method,
    ...(body && { body }),
    headers: {
      'Content-Type': 'application/json'
    },
  };

  return fetcher(fullUrl, options);
};
