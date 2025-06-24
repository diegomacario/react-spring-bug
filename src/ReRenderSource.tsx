import { useReRenderStore } from "./useReRenderStore";
import { useEffect } from "react";

export default function AnimationStarter() {
  const { setCauseReRender } = useReRenderStore();

  useEffect(() => {
    setCauseReRender(true);
  }, []);

  return null;
}
