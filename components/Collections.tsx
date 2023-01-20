import React from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  Stage,
  Grid,
  OrbitControls,
  Environment,
} from "@react-three/drei";

const Collections = () => {
  return (
    <Canvas
      gl={{ logarithmicDepthBuffer: true }}
      shadows
      camera={{ position: [-15, 0, 10], fov: 25 }}
    >
      <OrbitControls
        autoRotate
        autoRotateSpeed={0.05}
        enableZoom={false}
        makeDefault
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
      <Environment background preset="sunset" blur={0.8} />
    </Canvas>
  );
};

export default Collections;
