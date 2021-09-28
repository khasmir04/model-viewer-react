import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
// import { Environment } from "@react-three/drei";
// Use environment for custom background
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { Suspense } from "react";

// USING OBJ
const Scene = () => {
  const mtl = useLoader(MTLLoader, './assets/location/island/pirate.mtl')
  const obj = useLoader(OBJLoader, './assets/location/island/pirate.obj', loader => {
    mtl.preload()
    loader.setMaterials(mtl)
  })
  return <primitive object={obj} scale={0.05} />
}

export default function ModelViewerObj() {
  return (
    <Canvas className="canvas-container border-gray-500 bg-black border-2 rounded-xl">
      <PerspectiveCamera
        makeDefault
        // aspect={1200 / 600}
        // radius={(1200 + 600) / 4}
        fov={45}
        position={[0, 0, 100]} />
      <Suspense fallback={null}>
        <Scene />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 3000, 10]} angle={0.3} />
        <OrbitControls />
        {/* <Environment preset="sunset" background /> */}
      </Suspense>
    </Canvas>
  );
}