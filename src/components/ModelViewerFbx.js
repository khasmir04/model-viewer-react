import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
// import { Environment } from "@react-three/drei";
// Use environment for custom background
import { PerspectiveCamera, OrbitControls, Stars, Center } from "@react-three/drei";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { Suspense } from "react";

// USING FBX
const Scene = () => {
  const fbx = useLoader(FBXLoader, "./assets/ship/fbx/untitled.fbx");
  return <primitive object={fbx} scale={0.05} />;
};

export default function ModelViewerObj() {
  return (
    <Canvas className="canvas-container border-gray-500 bg-black border-2 rounded-xl">
      <PerspectiveCamera
        makeDefault
        // aspect={1200 / 600}
        // radius={(1200 + 600) / 4}
        far={600}
        fov={45}
        position={[0, 0, 100]} />
      <Suspense fallback={null}>
        <Stars />
        <Center>
          <Scene />
        </Center>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 3000, 10]} angle={0.3} />
        <OrbitControls />
        {/* <Environment preset="sunset" background /> */}
      </Suspense>
    </Canvas>
  );
}