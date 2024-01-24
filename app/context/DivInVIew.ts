import { create } from "zustand";

interface DivInViewProps {
  currentDivId: string;
  setCurrentDivId: (id: string) => void;
}

const useDivInView = create<DivInViewProps>((set) => ({
  currentDivId: "home",
  setCurrentDivId: (id) => set(() => ({ currentDivId: id })),
}));

export default useDivInView;
