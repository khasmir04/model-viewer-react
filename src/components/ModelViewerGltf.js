import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { OrbitControls, Center } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';
// Other helpers from drei
// import { Environment, Stars } from "@react-three/drei";
// Additional effects
// import { DepthOfField,  Noise} from '@react-three/postprocessing';

// USING GLTF
const Model = () => {
  const gltf = useLoader(GLTFLoader, "./assets/location/treasure-island/treasure_island.gltf");
  return (
    <>
      <primitive object={gltf.scene} scale={0.4} />
    </>
  );
};

export default function ModelViewerGltf() {
  return (
    <div className="App">
      <Canvas
        className="canvas-container border-gray-400 bg-white border-2 rounded-xl"
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 3000, 10]} angle={0.3} />
          <Center>
            <Model />
          </Center>
          <OrbitControls maxDistance={5} />
        </Suspense>
        <EffectComposer>
          {/* <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} height={480} /> */}
          <Bloom luminanceThreshold={0} luminanceSmoothing={1.5} height={300} />
          {/* <Noise opacity={0.02} /> */}
          <Vignette eskil={false} offset={0.1} darkness={0.5} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
