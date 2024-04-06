import { useEffect } from "react";
import { useFilterStore } from "../../store/filters";
import { Params, fetchData } from "../../customeHooks/fetcher";
import { IEventType, useEventsStore } from "../../store/events";

export default function FiltersMiddleware() {
  const { filters } = useFilterStore();
  const { update } = useEventsStore();
  useEffect(() => {
    fetchData(
      "/events",
      "GET",
      undefined,
      filters as Params
    ).then((data) => {
      update(data as IEventType[])
  });
    
  }, [filters, update]);
  return null;
}
