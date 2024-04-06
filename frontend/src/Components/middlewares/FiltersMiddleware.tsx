import { useEffect } from "react";
import { useFilterStore } from "../../store/filters";
import { Params, fetchData } from "../../customeHooks/fetcher";
import { IEventType, useEventsStore } from "../../store/events";
import { useLoadingStore } from "../../store/loading";

export default function FiltersMiddleware() {
  const { filters } = useFilterStore();
  const { update } = useEventsStore();
  const { setIsLoading } = useLoadingStore();
  useEffect(() => {
    setIsLoading(true);
    fetchData("/events", "GET", undefined, filters as Params).then((data) => {
      update(data as IEventType[]);
      setIsLoading(false);
    });
  }, [filters, update]);
  return null;
}
