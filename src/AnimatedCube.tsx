import { useSpring, easings } from "@react-spring/web";
import { useEffect, useRef } from "react";
import { Mesh } from "three";
import { useReRenderStore } from "./useReRenderStore";

export default function AnimatedCube() {
  const { causeReRender } = useReRenderStore();

  const meshRef = useRef<Mesh>(null);

  const [heightSpring, heightSpringAPI] = useSpring(
    () => ({
      progress: 0.0,
      config: {
        easing: easings.easeOutCubic,
        duration: 1500,
      },
      onChange: () => {
        if (meshRef.current) {
          const currProgress = heightSpring.progress.get();
          meshRef.current.position.y = currProgress * 3;
        }
      },
    }),
    []
  );

  useEffect(() => {
    heightSpringAPI.start({ progress: 1.0 });
  }, []);

  return (
    <>
      <mesh ref={meshRef}>
        <boxGeometry />
        <meshBasicMaterial color="crimson" />
      </mesh>
    </>
  );
}
