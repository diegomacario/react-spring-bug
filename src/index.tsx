import ReactDOM from "react-dom/client";
import "./style.css";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "three";
import { OrbitControls } from "@react-three/drei";
import AnimatedCube from "./AnimatedCube";

const root = ReactDOM.createRoot(
  document.querySelector("#root") as HTMLElement
);

const camera = new PerspectiveCamera(45, 1, 0.1, 50);
camera.position.set(7.5, 7.5, 7.5);
camera.lookAt(0, 0, 0);

root.render(
  <>
    <Canvas
      dpr={[1, 2]}
      camera={camera}
      gl={{ powerPreference: "high-performance", antialias: false }}
      shadows={false}
    >
      <color attach="background" args={["black"]} />
      <OrbitControls />
      <axesHelper args={[5]} />
      <AnimatedCube />
    </Canvas>
  </>
);
