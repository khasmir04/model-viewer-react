import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { Suspense } from "react";


// USING FBX
// const Scene = () => {
//   const fbx = useLoader(FBXLoader, "./assets/ship/fbx/untitled.fbx");

//   return <primitive object={fbx} scale={0.05} />;
// };

// USING OBJ
const Scene = () => {
  const obj = useLoader(OBJLoader, './assets/location/island/pirate.obj')
  return <primitive object={obj} scale={0.05} />
}


export default function ModelViewer() {
  return (
    <Canvas className="canvas-container border-gray-400 border-2">
      <Suspense fallback={null}>
        <Scene />
        <OrbitControls />
        {/* <Environment preset="sunset" background /> */}
      </Suspense>
    </Canvas>
  );
}