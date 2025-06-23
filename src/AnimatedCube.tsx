import { useSpring, easings } from "@react-spring/web";
import { button, useControls } from "leva";
import { useRef } from "react";
import { Mesh } from "three";

export default function AnimatedCube() {
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

  useControls(
    "Animated Cube",
    {
      "Start Spring": button(() => {
        heightSpringAPI.start({
          from: { progress: 0.0 },
          to: { progress: 1.0 },
        });
      }),
    },
    { collapsed: false }
  );

  return (
    <>
      <mesh ref={meshRef}>
        <boxGeometry />
        <meshBasicMaterial color="crimson" />
      </mesh>
    </>
  );
}
