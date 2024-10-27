import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Box, Button, Typography } from '@mui/material';
import { Shape } from '../types';

interface CanvasRendererProps {
    shapes: Shape[];
    onClose: () => void;
}

const ShapeRenderer: React.FC<{ shape: Shape; position: [number, number, number]; onShapeClick: (name: string) => void }> = ({ shape, position, onShapeClick }) => {
    return (
        <mesh position={position} onClick={() => onShapeClick(shape.name)}>
            {shape.type === 'Sphere' && <sphereGeometry args={[1, 32, 32]} />}
            {shape.type === 'Cube' && <boxGeometry args={[1, 1, 1]} />}
            {shape.type === 'Cylinder' && <cylinderGeometry args={[0.5, 0.5, 1, 32]} />}
            {shape.type === 'Cone' && <coneGeometry args={[0.5, 1, 32]} />}
            <meshStandardMaterial color="white" />
        </mesh>
    );
};

export const AllCanvasRenderer: React.FC<CanvasRendererProps> = ({ shapes, onClose }) => {
    const [selectedShapeName, setSelectedShapeName] = React.useState<string | null>(null);
    const [rotationAngle, setRotationAngle] = React.useState<number>(0); // State to keep track of rotation

    const handleShapeClick = (name: string) => {
        setSelectedShapeName(name);
    };

    const totalShapes = shapes.length;
    const centerX = (totalShapes - 1) * 1;

    const calculateRotatedPositions = (angle: number) => {
        return shapes.map((_, index) => {
            const theta = (index * (360 / totalShapes) + angle) * (Math.PI / 180); // Convert to radians
            const radius = centerX / 2;
            return [
                Math.cos(theta) * radius,
                0,
                Math.sin(theta) * radius,
            ] as [number, number, number];
        });
    };

    const rotatedPositions = calculateRotatedPositions(rotationAngle);

    const handleRotate = () => {
        setRotationAngle((prev) => prev + 1);
    };

    React.useEffect(() => {
        const interval = setInterval(handleRotate, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <Box sx={{ position: 'relative', width: '80%', height: '83vh' }}>
            <Button onClick={onClose} sx={{ position: 'absolute', top: 10, right: 10, zIndex: 10 }} color="secondary" variant="contained">
                Close
            </Button>
            {selectedShapeName && (
                <Typography variant="h4" gutterBottom sx={{ position: 'absolute', top: 10, left: 10, zIndex: 10, color: 'white' }}>
                    {selectedShapeName}
                </Typography>
            )}
            <Canvas style={{ background: '#262626' }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 10]} />
                <OrbitControls />
                {shapes.map((shape, index) => (
                    <ShapeRenderer key={shape.id} shape={shape} position={rotatedPositions[index]} onShapeClick={handleShapeClick} />
                ))}
            </Canvas>
        </Box>
    );
};
