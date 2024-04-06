import { useEffect, useState } from "react";
import { RedLiveIcon, GreenLiveIcon } from "../../assests";
import { useFilterStore } from "../../store/filters";
import { IEventType, useEventsStore } from "../../store/events";
import { Params, fetchData } from "../../customeHooks/fetcher";

const POLL_INTERVAL = 5000;

export default function LiveButton() {
  const { filters } = useFilterStore();
  const { insertAfter } = useEventsStore();
  const [isLive, setIsLife] = useState(false);

  useEffect(() => {
    if (isLive) {
      const fetchEvents = () => {
        const toTime = Date.now();
        const fromTime = toTime - POLL_INTERVAL;
        let lastEventId: string | undefined;
        do {
          const params = {
            ...filters,
            occurredAtStart: fromTime,
            occurredAtEnd: toTime,
            lastEventId
          } as Params;
          fetchData("/events", "GET", undefined, params).then(
            // eslint-disable-next-line no-loop-func
            (data) => {
              lastEventId = data[data.length - 1]?.id;
              insertAfter(lastEventId, data as IEventType[]);
            }
          );
        } while (lastEventId);
      };

      const intervalId = setInterval(fetchEvents, POLL_INTERVAL);
      return () => clearInterval(intervalId);
    }
  }, [isLive]);

  return (
    <button
      className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium bg-gray-100 text-gray-500 focus:outline-none rounded-lg border border-gray-200 hover:bg-gray-200 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      type="button"
      onClick={() => {
        setIsLife(!isLive);
      }}
    >
      {!isLive ? RedLiveIcon : GreenLiveIcon}
      Live
    </button>
  );
}
