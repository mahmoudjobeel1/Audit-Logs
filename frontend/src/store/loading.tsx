import { create } from "zustand";

export const useLoadingStore = create<{
  isLoading: boolean;
  setIsLoading: (status: boolean) => void;
}>((set) => ({
  isLoading: false,
  setIsLoading: (status) => {
    set((state) => ({ isLoading: status }));
  },
}));
