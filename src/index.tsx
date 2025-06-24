import ReactDOM from "react-dom/client";
import "./style.css";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "three";
import AnimatedCube from "./AnimatedCube";
import ReRenderSource from "./ReRenderSource";

const root = ReactDOM.createRoot(
  document.querySelector("#root") as HTMLElement
);

const camera = new PerspectiveCamera(45, 1, 0.1, 50);
camera.position.set(7.5, 7.5, 7.5);
camera.lookAt(0, 0, 0);

root.render(
  <>
    <Canvas camera={camera}>
      <color attach="background" args={["black"]} />
      <axesHelper args={[5]} />
      <AnimatedCube />
      <ReRenderSource />
    </Canvas>
  </>
);
