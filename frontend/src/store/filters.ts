import { create } from "zustand";

interface IFilterStateType {
  actorId?: string;
  actorName?: string;
  group?: string;
  targetId?: string;
  targetName?: string;
  actionName?: string;
  occurredAtStart?: string;
  occurredAtEnd?: string;
  searchText?: string;
  limit?: number;
  lastEventId?: string;
  actionId?: string;
}

export const useFilterStore = create<{
  filters: IFilterStateType;
  updateFilters: (filters: Partial<IFilterStateType>) => void;
}>((set) => ({
  filters: {},
  updateFilters: (filters) =>{
    set((state) => ({
      filters: { ...state.filters, ...filters },
  }))},
}));
