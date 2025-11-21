import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import type { GLTF } from 'three-stdlib';

export interface DroneParts {
    hull: 'octo' | 'hexa' | 'quad';
    engines: 'octo' | 'hexa' | 'quad';
    stands: 'high_octo' | 'medium_hexa' | 'low_quad';
}

interface DroneConfiguratorProps extends React.ComponentProps<'group'> {
    parts: DroneParts;
}

const SpinningBlade = ({ dir = 1, speed = 5, ...props }: any) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotateY(speed * delta * dir);
    }
  });

  return <mesh ref={meshRef} {...props} />;
};

type GLTFResult = GLTF & {
  nodes: {
    Electronics_Case: THREE.Mesh; Octo: THREE.Mesh; Hexa: THREE.Mesh; Quadro: THREE.Mesh;
    ['Oct-1000']: THREE.Mesh; ['Oct-1001']: THREE.Mesh; ['Oct-1002']: THREE.Mesh; ['Oct-1003']: THREE.Mesh; ['Oct-1004']: THREE.Mesh; ['Oct-1005']: THREE.Mesh; ['Oct-1006']: THREE.Mesh; ['Oct-1007']: THREE.Mesh;
    ['Oct-2001']: THREE.Mesh; ['Oct-2003']: THREE.Mesh; ['Oct-2005']: THREE.Mesh; ['Oct-2007']: THREE.Mesh; ['Oct-2016']: THREE.Mesh; ['Oct-2018']: THREE.Mesh; ['Oct-2019']: THREE.Mesh; ['Oct-2021']: THREE.Mesh;
    ['Oct-3001']: THREE.Mesh; ['Oct-3002']: THREE.Mesh; ['Oct-3003']: THREE.Mesh; ['Oct-3004']: THREE.Mesh; ['Oct-3005']: THREE.Mesh; ['Oct-3006']: THREE.Mesh; ['Oct-3007']: THREE.Mesh; ['Oct-3018']: THREE.Mesh;
    ['Engine-hex008']: THREE.Mesh; ['Engine-hex009']: THREE.Mesh; ['Engine-hex010']: THREE.Mesh; ['Engine-hex011']: THREE.Mesh; ['Engine-hex012']: THREE.Mesh; ['Engine-hex013']: THREE.Mesh;
    ['Hex-1004']: THREE.Mesh; ['Hex-1006']: THREE.Mesh; ['Hex-1008']: THREE.Mesh; ['Hex-1009']: THREE.Mesh; ['Hex-1010']: THREE.Mesh; ['Hex-1011']: THREE.Mesh;
    ['Engine-Quadro014']: THREE.Mesh; ['Engine-Quadro015']: THREE.Mesh; ['Engine-Quadro016']: THREE.Mesh; ['Engine-Quadro017']: THREE.Mesh;
    ['Quadro-1002']: THREE.Mesh; ['Quadro-1012']: THREE.Mesh; ['Quadro-1013']: THREE.Mesh; ['Quadro-1014']: THREE.Mesh;
    Plates_Top: THREE.Mesh; Plates_Bottom: THREE.Mesh; Stands_High_Octo: THREE.Mesh; Stands_Medium_Hexa: THREE.Mesh; Stands_Low_Quad: THREE.Mesh;
  };
  materials: { Material: THREE.MeshStandardMaterial; };
};

// Тип для пропсов подкомпонентов двигателей
type EngineGroupProps = {
    nodes: GLTFResult['nodes'];
    materials: GLTFResult['materials'];
};

const EnginesOcto = ({ nodes, materials }: EngineGroupProps) => (
  <group name="Engines_Octo_Group">
    <SpinningBlade dir={1} geometry={nodes['Oct-1000'].geometry} material={materials.Material} position={[-1.018, -0.127, 2.447]} rotation={[-3.06, 0.143, 3]} scale={0.359} />
    <SpinningBlade dir={-1} geometry={nodes['Oct-1001'].geometry} material={materials.Material} position={[1.01, -0.127, 2.45]} rotation={[-3.06, 0.143, 3]} scale={0.359} />
    <SpinningBlade dir={1} geometry={nodes['Oct-1002'].geometry} material={materials.Material} position={[2.447, -0.127, 1.018]} rotation={[-3.06, 0.143, 3]} scale={0.359} />
    <SpinningBlade dir={-1} geometry={nodes['Oct-1003'].geometry} material={materials.Material} position={[2.45, -0.127, -1.01]} rotation={[-3.06, 0.143, 3]} scale={0.359} />
    <SpinningBlade dir={1} geometry={nodes['Oct-1004'].geometry} material={materials.Material} position={[1.018, -0.127, -2.447]} rotation={[-3.06, 0.143, 3]} scale={0.359} />
    <SpinningBlade dir={-1} geometry={nodes['Oct-1005'].geometry} material={materials.Material} position={[-1.01, -0.127, -2.45]} rotation={[-3.06, 0.143, 3]} scale={0.359} />
    <SpinningBlade dir={1} geometry={nodes['Oct-1006'].geometry} material={materials.Material} position={[-2.447, -0.127, -1.018]} rotation={[-3.06, 0.143, 3]} scale={0.359} />
    <SpinningBlade dir={-1} geometry={nodes['Oct-1007'].geometry} material={materials.Material} position={[-2.45, -0.127, 1.01]} rotation={[-3.06, 0.143, 3]} scale={0.359} />
    
    <SpinningBlade dir={-1} geometry={nodes['Oct-2001'].geometry} material={materials.Material} position={[-1.018, -0.126, 2.447]} rotation={[-3.06, 0.153, 3]} scale={0.359} />
    <SpinningBlade dir={1} geometry={nodes['Oct-2003'].geometry} material={materials.Material} position={[-2.45, -0.126, 1.01]} rotation={[-3.06, 0.153, 3]} scale={0.359} />
    <SpinningBlade dir={-1} geometry={nodes['Oct-2005'].geometry} material={materials.Material} position={[-2.447, -0.126, -1.018]} rotation={[-3.06, 0.153, 3]} scale={0.359} />
    <SpinningBlade dir={1} geometry={nodes['Oct-2007'].geometry} material={materials.Material} position={[-1.01, -0.126, -2.45]} rotation={[-3.06, 0.153, 3]} scale={0.359} />
    <SpinningBlade dir={-1} geometry={nodes['Oct-2016'].geometry} material={materials.Material} position={[1.018, -0.126, -2.447]} rotation={[-3.06, 0.153, 3]} scale={0.359} />
    <SpinningBlade dir={1} geometry={nodes['Oct-2018'].geometry} material={materials.Material} position={[2.45, -0.126, -1.01]} rotation={[-3.06, 0.153, 3]} scale={0.359} />
    <SpinningBlade dir={-1} geometry={nodes['Oct-2019'].geometry} material={materials.Material} position={[2.447, -0.126, 1.018]} rotation={[-3.06, 0.153, 3]} scale={0.359} />
    <SpinningBlade dir={1} geometry={nodes['Oct-2021'].geometry} material={materials.Material} position={[1.01, -0.126, 2.45]} rotation={[-3.06, 0.153, 3]} scale={0.359} />
    
    <mesh geometry={nodes['Oct-3001'].geometry} material={nodes['Oct-3001'].material} position={[-1.012, -0.224, 2.443]} rotation={[0.078, -0.089, 0.054]} scale={0.117} />
    <mesh geometry={nodes['Oct-3002'].geometry} material={nodes['Oct-3002'].material} position={[1.012, -0.224, 2.444]} rotation={[0.078, -0.089, 0.054]} scale={0.117} />
    <mesh geometry={nodes['Oct-3003'].geometry} material={nodes['Oct-3003'].material} position={[2.443, -0.224, 1.012]} rotation={[0.078, -0.089, 0.054]} scale={0.117} />
    <mesh geometry={nodes['Oct-3004'].geometry} material={nodes['Oct-3004'].material} position={[2.444, -0.224, -1.012]} rotation={[0.078, -0.089, 0.054]} scale={0.117} />
    <mesh geometry={nodes['Oct-3005'].geometry} material={nodes['Oct-3005'].material} position={[1.012, -0.224, -2.443]} rotation={[0.078, -0.089, 0.054]} scale={0.117} />
    <mesh geometry={nodes['Oct-3006'].geometry} material={nodes['Oct-3006'].material} position={[-1.012, -0.224, -2.444]} rotation={[0.078, -0.089, 0.054]} scale={0.117} />
    <mesh geometry={nodes['Oct-3007'].geometry} material={nodes['Oct-3007'].material} position={[-2.443, -0.224, -1.012]} rotation={[0.078, -0.089, 0.054]} scale={0.117} />
    <mesh geometry={nodes['Oct-3018'].geometry} material={nodes['Oct-3018'].material} position={[-2.444, -0.224, 1.012]} rotation={[0.078, -0.089, 0.054]} scale={0.117} />
  </group>
);

const EnginesHexa = ({ nodes, materials }: EngineGroupProps) => (
  <group name="Engines_Hexa_Group">
    <mesh geometry={nodes['Engine-hex008'].geometry} material={nodes['Engine-hex008'].material} position={[-0.986, -0.171, 1.716]} scale={0.122} />
    <mesh geometry={nodes['Engine-hex009'].geometry} material={nodes['Engine-hex009'].material} position={[-1.979, -0.171, 0.004]} scale={0.122} />
    <mesh geometry={nodes['Engine-hex010'].geometry} material={nodes['Engine-hex010'].material} position={[0.993, -0.171, 1.712]} scale={0.122} />
    <mesh geometry={nodes['Engine-hex011'].geometry} material={nodes['Engine-hex011'].material} position={[1.979, -0.171, -0.004]} scale={0.122} />
    <mesh geometry={nodes['Engine-hex012'].geometry} material={nodes['Engine-hex012'].material} position={[0.986, -0.171, -1.716]} scale={0.122} />
    <mesh geometry={nodes['Engine-hex013'].geometry} material={nodes['Engine-hex013'].material} position={[-0.993, -0.171, -1.712]} scale={0.122} />
    
    <SpinningBlade dir={1} geometry={nodes['Hex-1004'].geometry} material={materials.Material} position={[-0.988, -0.077, 1.714]} rotation={[3.125, 0.47, 3.083]} scale={0.359} />
    <SpinningBlade dir={-1} geometry={nodes['Hex-1006'].geometry} material={materials.Material} position={[0.99, -0.077, 1.712]} rotation={[3.125, 0.47, 3.083]} scale={0.359} />
    <SpinningBlade dir={1} geometry={nodes['Hex-1008'].geometry} material={materials.Material} position={[1.978, -0.077, -0.001]} rotation={[3.125, 0.47, 3.083]} scale={0.359} />
    <SpinningBlade dir={-1} geometry={nodes['Hex-1009'].geometry} material={materials.Material} position={[0.988, -0.077, -1.714]} rotation={[3.125, 0.47, 3.083]} scale={0.359} />
    <SpinningBlade dir={1} geometry={nodes['Hex-1010'].geometry} material={materials.Material} position={[-0.99, -0.077, -1.712]} rotation={[3.125, 0.47, 3.083]} scale={0.359} />
    <SpinningBlade dir={-1} geometry={nodes['Hex-1011'].geometry} material={materials.Material} position={[-1.978, -0.077, 0.001]} rotation={[3.125, 0.47, 3.083]} scale={0.359} />
  </group>
);

const EnginesQuadro = ({ nodes, materials }: EngineGroupProps) => (
  <group name="Engines_Quadro_Group">
    <mesh geometry={nodes['Engine-Quadro014'].geometry} material={nodes['Engine-Quadro014'].material} position={[-1.026, -0.171, 1.019]} scale={0.122} />
    <mesh geometry={nodes['Engine-Quadro015'].geometry} material={nodes['Engine-Quadro015'].material} position={[-1.026, -0.171, -1.021]} scale={0.122} />
    <mesh geometry={nodes['Engine-Quadro016'].geometry} material={nodes['Engine-Quadro016'].material} position={[1.027, -0.171, 1.021]} scale={0.122} />
    <mesh geometry={nodes['Engine-Quadro017'].geometry} material={nodes['Engine-Quadro017'].material} position={[1.026, -0.171, -1.019]} scale={0.122} />
    
    <SpinningBlade dir={1} geometry={nodes['Quadro-1002'].geometry} material={materials.Material} position={[-1.022, -0.076, -1.017]} rotation={[-Math.PI, 0.752, 3.054]} scale={0.336} />
    <SpinningBlade dir={-1} geometry={nodes['Quadro-1012'].geometry} material={materials.Material} position={[1.022, -0.076, -1.015]} rotation={[-Math.PI, 0.752, 3.054]} scale={0.336} />
    <SpinningBlade dir={1} geometry={nodes['Quadro-1013'].geometry} material={materials.Material} position={[1.023, -0.076, 1.017]} rotation={[-Math.PI, 0.752, 3.054]} scale={0.336} />
    <SpinningBlade dir={-1} geometry={nodes['Quadro-1014'].geometry} material={materials.Material} position={[-1.022, -0.076, 1.015]} rotation={[-Math.PI, 0.752, 3.054]} scale={0.336} />
  </group>
);

export function DroneConfigurator({ parts, ...props }: DroneConfiguratorProps) {
  const { nodes, materials } = useGLTF('/drone_final.glb') as unknown as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh name="Hull_Octo" visible={parts.hull === 'octo'} geometry={nodes.Octo.geometry} material={nodes.Octo.material} position={[0, -0.238, 0]} />
      <mesh name="Hull_Hexa" visible={parts.hull === 'hexa'} geometry={nodes.Hexa.geometry} material={nodes.Hexa.material} position={[0, -0.327, 0]} />
      <mesh name="Hull_Quadro" visible={parts.hull === 'quad'} geometry={nodes.Quadro.geometry} material={nodes.Quadro.material} position={[0, -0.319, 0]} />
      
      {parts.engines === 'octo' && <EnginesOcto nodes={nodes} materials={materials} />}
      {parts.engines === 'hexa' && <EnginesHexa nodes={nodes} materials={materials} />}
      {parts.engines === 'quad' && <EnginesQuadro nodes={nodes} materials={materials} />}
      
      <mesh name="Stands_High_Octo" visible={parts.stands === 'high_octo'} geometry={nodes.Stands_High_Octo.geometry} material={nodes.Stands_High_Octo.material} position={[0, -0.785, 0]} rotation={[Math.PI / 2, 0, 0]} scale={1.003} />
      <mesh name="Stands_Medium_Hexa" visible={parts.stands === 'medium_hexa'} geometry={nodes.Stands_Medium_Hexa.geometry} material={nodes.Stands_Medium_Hexa.material} position={[0, -0.217, 0]} rotation={[Math.PI / 2, 0, 0]} scale={1.003} />
      <mesh name="Stands_Low_Quad" visible={parts.stands === 'low_quad'} geometry={nodes.Stands_Low_Quad.geometry} material={nodes.Stands_Low_Quad.material} rotation={[Math.PI / 2, 0, 0]} scale={1.003} />
      
      <mesh geometry={nodes.Electronics_Case.geometry} material={nodes.Electronics_Case.material} position={[0, -0.029, 0]} scale={[0.619, 0.441, 0.736]} />
      <mesh geometry={nodes.Plates_Top.geometry} material={nodes.Plates_Top.material} position={[0, 0.022, 0]} scale={0.591} />
      <mesh geometry={nodes.Plates_Bottom.geometry} material={nodes.Plates_Bottom.material} position={[0, -0.394, 0]} />
    </group>
  )
}

useGLTF.preload('/drone_final.glb');