import { create } from "zustand";

export const useAppStore = create((set) => ({
  accessToken: localStorage.getItem('accessToken') || "",
  setAccessToken: (accessToken) => set(() => ({ accessToken })),
}));
