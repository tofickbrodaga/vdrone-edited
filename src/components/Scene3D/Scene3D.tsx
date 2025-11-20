import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { DroneConfigurator } from '../DroneConfigurator';
import type { DroneParts } from '../DroneConfigurator';


interface Scene3DProps {
  parts: DroneParts;
}

const Scene3D = ({ parts }: Scene3DProps) => {
  return (
    <div style={{ width: '100%', height: '60vh' }}>
      <Canvas camera={{ position: [0, 2, 14], fov: 40 }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 10, 5]} intensity={2} />
        <Suspense fallback={null}>
          <DroneConfigurator parts={parts} position={[0, -1.5, 0]} scale={1} />
          <OrbitControls
            enableZoom={true}
            enablePan={false}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI * 0.75}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;