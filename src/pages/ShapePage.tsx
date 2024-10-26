import React, { useState } from 'react';
import { ShapeTable, CanvasRenderer, CreateShapeModal } from '../components';
import { useShapesStorage } from '../hooks/useShapesStorage';
import { Shape } from '../types';
import { Button, Box, Typography, Stack } from '@mui/material';

export const ShapePage: React.FC = () => {
  const { shapes, addShape, deleteShape } = useShapesStorage();
  const [selectedShape, setSelectedShape] = useState<Shape | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleCreateShape = (shape: Shape) => addShape(shape);
  const handleRenderShape = (shape: Shape) => setSelectedShape(shape);
  const handleCloseCanvas = () => setSelectedShape(null);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      minHeight="100vh"
      sx={{ gap: 2 }}
    >
      <Typography variant="h4" gutterBottom>
        3D Shape Viewer
      </Typography>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary" onClick={() => setModalOpen(true)}>
          Add Shape
        </Button>
        <Button variant="contained" color="primary">
          Render
        </Button>
      </Stack>
      <Box width="80%" mt={2}>
        <ShapeTable shapes={shapes} onDelete={deleteShape} onRender={handleRenderShape} />
      </Box>
      {selectedShape && <CanvasRenderer shape={selectedShape} onClose={handleCloseCanvas} />}
      {modalOpen && <CreateShapeModal onCreate={handleCreateShape} onClose={() => setModalOpen(false)} />}
    </Box>
  );
};

