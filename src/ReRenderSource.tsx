import { useReRenderStore } from "./useReRenderStore";
import { useEffect } from "react";

export default function AnimationStarter() {
  const { setCauseReRender } = useReRenderStore();

  // This component just causes AnimatedCube to re-render
  useEffect(() => {
    setCauseReRender(true);
  }, []);

  return null;
}
