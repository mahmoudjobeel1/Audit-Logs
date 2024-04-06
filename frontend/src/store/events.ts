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
}

export const useEventsStore = create<IEventsStateType>((set) => ({
  arrayOfEvents: [],
  update: (events) => set((state) => ({ arrayOfEvents: events })),
  insertFirst: (events) =>
    set((state) => ({ arrayOfEvents: [...events, ...state.arrayOfEvents] })),
  insertLast: (events) =>
    set((state) => ({ arrayOfEvents: [...state.arrayOfEvents, ...events] })),
}));
