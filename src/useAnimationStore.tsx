import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

type AnimationData = {
  startAnimation: boolean;
  setStartAnimation: (startAnimation: boolean) => void;
};

export const useAnimationStore = create(
  subscribeWithSelector<AnimationData>((set) => ({
    startAnimation: false,
    setStartAnimation: (startAnimation: boolean) => set({ startAnimation }),
  }))
);
