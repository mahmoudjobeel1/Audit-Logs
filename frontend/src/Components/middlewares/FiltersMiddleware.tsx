import { useEffect } from "react";
import { useFilterStore } from "../../store/filters";
import { Params, useDataFetcher } from "../../customeHooks/fetcher";
import { IEventType, useEventsStore } from "../../store/events";

export default function FiltersMiddleware() {
  const { filters } = useFilterStore();
  const {update} = useEventsStore();
  const { data, error } = useDataFetcher(
    "/events",
    "GET",
    undefined,
    filters as Params
  );
  useEffect(() => {
    update(data as IEventType[]);
  }, [data, error]);
  return null;
}
