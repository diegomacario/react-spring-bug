import { useAnimationStore } from "./useAnimationStore";
import { useEffect } from "react";

export default function AnimationStarter() {
  const { setStartAnimation } = useAnimationStore();

  useEffect(() => {
    setStartAnimation(true);
  }, []);

  return null;
}
