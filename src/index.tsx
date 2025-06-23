import ReactDOM from "react-dom/client";
import "./style.css";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";

const root = ReactDOM.createRoot(
  document.querySelector("#root") as HTMLElement
);

const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 50);
camera.position.set(...new THREE.Vector3(5, 5, 5).toArray());
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
      <axesHelper args={[1]} />
    </Canvas>
  </>
);
