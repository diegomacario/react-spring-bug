import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

type ReRenderData = {
  causeReRender: boolean;
  setCauseReRender: (causeReRender: boolean) => void;
};

export const useReRenderStore = create(
  subscribeWithSelector<ReRenderData>((set) => ({
    causeReRender: false,
    setCauseReRender: (causeReRender: boolean) => set({ causeReRender }),
  }))
);
