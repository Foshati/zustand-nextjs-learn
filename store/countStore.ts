import { create } from "zustand";


interface IuseCountStore {
    counte: number;
    increment: () => void;
    decrement: () => void;
}

export const useCountStore = create<IuseCountStore>((set) => ({
    counte: 0,
    increment: () => set((state) => ({ counte: state.counte + 1 })),
    decrement: () => set((state) => ({ counte: state.counte - 1 }))
}))