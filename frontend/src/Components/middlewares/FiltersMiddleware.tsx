import { useEffect } from "react";
import { useFilterStore } from "../../store/filters";
import { Params, useDataFetcher } from "../../customeHooks/fetcher";

export default function FiltersMiddleware() {
  const { filters } = useFilterStore();
  const { data, error } = useDataFetcher(
    "/events",
    "GET",
    undefined,
    filters as Params
  );
  useEffect(() => {
    console.log(data);
  }, [data, error]);
  return null;
}
