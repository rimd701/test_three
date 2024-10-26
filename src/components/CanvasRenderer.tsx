import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Shape } from '../types';
import { OrbitControls } from '@react-three/drei';
import { Button } from '@mui/material';

interface CanvasRendererProps {
  shape: Shape;
  onClose: () => void;
}

const ShapeRenderer: React.FC<{ shape: Shape }> = ({ shape }) => {
  const ref = useRef<any>();

  switch (shape.type) {
    case 'Sphere':
      return (
        <mesh ref={ref}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color={'white'} />
        </mesh>
      );
    case 'Cube':
      return (
        <mesh ref={ref}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={'white'} />
        </mesh>
      );
    case 'Cylinder':
      return (
        <mesh ref={ref}>
          <cylinderGeometry ref={ref} args={[0.7, 0.7, 1.5, 32]} />;
          <meshStandardMaterial color={'white'} />
        </mesh>
      );
    case 'Cone':
      return (
        <mesh ref={ref}>
          <coneGeometry ref={ref} args={[0.7, 1.5, 32]} />;
          <meshStandardMaterial color={'white'} />
        </mesh>
      );
    default:
      return null;
  }
};

export const CanvasRenderer: React.FC<CanvasRendererProps> = ({ shape, onClose }) => (
  <div style={{ position: 'relative', height: '500px', width: '60%' }}>
    <Button onClick={onClose} style={{ position: 'absolute', right: 10, top: 10, zIndex: 10 }}>
      Close
    </Button>
    <Canvas style={{ background: '#262626' }}>
      <ambientLight intensity={1.0} />
      <directionalLight position={[10, 10, 10]} />
      <OrbitControls />
      <ShapeRenderer shape={shape} />
    </Canvas>
  </div>
);
