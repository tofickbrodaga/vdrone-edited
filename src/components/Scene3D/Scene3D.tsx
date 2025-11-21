import { Suspense, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, Float } from '@react-three/drei';
import { DroneConfigurator } from '../DroneConfigurator';
import type { DroneParts } from '../DroneConfigurator';
import * as THREE from 'three';

interface Scene3DProps {
  parts: DroneParts;
}

const CameraRig = ({ hull }: { hull: string }) => {
  useThree(); 
  
  let targetZ = 6.5; 
  if (hull === 'hexa') targetZ = 9; 
  if (hull === 'octo') targetZ = 10.5; 

  useFrame((state, delta) => {
    const targetPosition = new THREE.Vector3(0, 1, targetZ);
    state.camera.position.lerp(targetPosition, 2.5 * delta); 
  });

  return null;
};

const AnimatedGroup = ({ children }: { children: React.ReactNode }) => {
  const groupRef = useRef<THREE.Group>(null);
  useFrame(() => {
    if (!groupRef.current) return;
    groupRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.06);
  });
  return <group ref={groupRef} scale={[0, 0, 0]}>{children}</group>;
};

const Scene3D = ({ parts }: Scene3DProps) => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Canvas
        shadows
        dpr={[1, 2]} 
        camera={{ position: [0, 1, 8], fov: 35 }}
        gl={{ alpha: true, antialias: true }}
      >
        <CameraRig hull={parts.hull} />

        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />

        <Suspense fallback={null}>
          <Environment preset="city" />
          
          <AnimatedGroup>
            <Float 
              speed={2}             
              rotationIntensity={0.5} 
              floatIntensity={1}      
              floatingRange={[-0.1, 0.1]} 
            >
              <DroneConfigurator parts={parts} position={[0, -0.5, 0]} scale={0.9} />
            </Float>
          </AnimatedGroup>
          
          <ContactShadows 
            position={[0, -1.6, 0]} 
            opacity={0.7} 
            scale={15} 
            blur={2.5} 
            far={4.5} 
            color="black"
          />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 3} 
            maxPolarAngle={Math.PI / 2}
            autoRotate={true}
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;