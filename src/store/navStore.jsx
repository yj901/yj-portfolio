import { create } from "zustand";

const useNavStore = create((set) => ({
  currentSection: "cover",
  setCurrentSection: (section) => set({ currentSection: section }),
}));

export default useNavStore;
