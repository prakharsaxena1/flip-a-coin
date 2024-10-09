import { create } from "zustand";

type CoinStoreType = {
  tailsText: string;
  headsText: string;
  headsFrozen: string;
  tailsFrozen: string;
  result: "Heads" | "Tails" | null;
  isFlipping: boolean;
  setResult: (val: CoinStoreType['result']) => void;
  setHeadsFrozen: (val: string) => void;
  setHeadsText: (val: string) => void;
  setIsFlipping: (val: boolean) => void;
  setTailsText: (val: string) => void;
  setTailsFrozen: (val: string) => void;
  swapText: () => void;
  clearText: () => void;
};

export const useCoinStore = create<CoinStoreType>((set) => ({
  headsText: "",
  tailsText: "",
  headsFrozen: "",
  tailsFrozen: "",
  isFlipping: false,
  result: null,
  setResult: (val) => set(() => ({ result: val })),
  setIsFlipping: (val) => set(() => ({ isFlipping: val })),
  setHeadsText: (val) => set(() => ({ headsText: val })),
  setTailsText: (val) => set(() => ({ tailsText: val })),
  setHeadsFrozen: (val) => set(() => ({ headsFrozen: val })),
  setTailsFrozen: (val) => set(() => ({ tailsFrozen: val })),
  swapText: () =>
    set((state) => ({
      headsText: state.tailsText,
      tailsText: state.headsText,
    })),
  clearText: () => set(() => ({ headsText: "", tailsText: "" })),
}));
