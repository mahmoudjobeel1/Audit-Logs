import { useEffect } from "react";
import { useEventsStore } from "../store/events";
import { useFilterStore } from "../store/filters";
import { useLoadingStore } from "../store/loading";
import { Params, fetchData } from "./fetcher";

// Custom hook name starts with "use"
export function useFetchEvents() {
  const { filters } = useFilterStore();
  const { update, arrayOfEvents } = useEventsStore();
  const { setIsLoading, isLoading } = useLoadingStore();

  useEffect(() => {
    setIsLoading(true);
    fetchData("/events", "GET", undefined, filters as Params).then((data) => {
      update(data);
      setIsLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  return { isLoading, arrayOfEvents };
}
