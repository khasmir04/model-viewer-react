import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls, Center } from "@react-three/drei";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { Suspense } from "react";
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';
// Other helpers from drei
// import { Environment, Stars } from "@react-three/drei";
// Additional effects
// import { DepthOfField,  Noise} from '@react-three/postprocessing';

// USING OBJ
const Model = () => {
  const mtl = useLoader(MTLLoader, './assets/location/tropical/Small_Tropical_Island.mtl')
  const obj = useLoader(OBJLoader, './assets/location/tropical/Small Tropical Island.obj', loader => {
    mtl.preload()
    loader.setMaterials(mtl)
  })
  return (
    <>
      <primitive object={obj} scale={0.05} />
    </>
  );
};

export default function ModelViewerObj() {
  return (
    <Canvas linear={true}
      className="canvas-container border-gray-400 bg-white border-2 rounded-xl">
      <PerspectiveCamera
        makeDefault
        // aspect={1200 / 600}
        // radius={(1200 + 600) / 4}
        // near={100}
        far={600}
        fov={45}
        position={[0, 0, 100]} />
      <Suspense fallback={null}>
        {/* <Stars /> */}
        <Center>
          <Model />
        </Center>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 3000, 10]} angle={0.3} />
        <OrbitControls />
        {/* <Environment preset="sunset" background /> */}
      </Suspense>
      <EffectComposer>
        {/* <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} height={480} /> */}
        <Bloom luminanceThreshold={0} luminanceSmoothing={1.5} height={300} />
        {/* <Noise opacity={0.02} /> */}
        <Vignette eskil={false} offset={0.1} darkness={0.5} />
      </EffectComposer>
    </Canvas>
  );
}