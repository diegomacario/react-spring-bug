import { useSpring, easings } from "@react-spring/web";
import { useEffect, useRef } from "react";
import { Mesh } from "three";
import { useReRenderStore } from "./useReRenderStore";

export default function AnimatedCube() {
  // This line is just here to cause a re-render of the component
  const { causeReRender } = useReRenderStore();

  const meshRef = useRef<Mesh>(null);

  // This spring raises the cube along the Y-axis
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

  // Raise the cube when the website opens
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
