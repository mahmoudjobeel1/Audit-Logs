import { create } from "zustand";

export interface IEventType {
  id: string;
  object: string;
  actorId: string;
  actorName: string;
  group: string;
  targetId: string;
  targetName: string;
  location: string;
  occurredAt: string;
  metadata: Record<string, any>;
  action: {
    id: string;
    object: string;
    name: string;
    eventId: string;
  };
}

interface IEventsStateType {
  arrayOfEvents: IEventType[];
  update: (events: IEventType[]) => void;
  insertFirst: (events: IEventType[]) => void;
  insertLast: (events: IEventType[]) => void;
  insertAfter: (id: string | undefined, newEvents: IEventType[]) => void;
}

export const useEventsStore = create<IEventsStateType>((set) => ({
  arrayOfEvents: [],
  update: (events) => set((state) => ({ arrayOfEvents: events })),
  insertFirst: (events) =>
    set((state) => ({ arrayOfEvents: [...events, ...state.arrayOfEvents] })),
  insertLast: (events) =>
    set((state) => ({ arrayOfEvents: [...state.arrayOfEvents, ...events] })),
  insertAfter: (id, newEvents) =>
    set((state) => {
      if (!(id)) {
        return { arrayOfEvents: [...newEvents, ...state.arrayOfEvents] };
      }
      const index = state.arrayOfEvents.findIndex((event) => event.id === id);
      if (index === -1) {
        return { arrayOfEvents: [...state.arrayOfEvents, ...newEvents] };
      }
      return {
        arrayOfEvents: [
          ...state.arrayOfEvents.slice(0, index + 1),
          ...newEvents,
          ...state.arrayOfEvents.slice(index + 1),
        ],
      };
    }),
}));
