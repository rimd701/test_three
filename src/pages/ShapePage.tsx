import React, { useState } from 'react';
import { ShapeTable, CanvasRenderer, CreateShapeModal, AllCanvasRenderer } from '../components';
import { useShapesStorage } from '../hooks/useShapesStorage';
import { Shape } from '../types';
import { Button, Box, Typography, Stack } from '@mui/material';

export const ShapePage: React.FC = () => {
  const { shapes, addShape, deleteShape } = useShapesStorage();
  const [selectedShape, setSelectedShape] = useState<Shape | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [showCanvas, setShowCanvas] = useState(false);
  const [showTitle, setShowTitle] = useState("");
  const [showAllShapes, setShowAllshape] = useState(false);

  const handleRenderAllShapes = () => {
    setShowCanvas(true);
    setShowAllshape(true);
  }
  const handleCreateShape = (shape: Shape) => addShape(shape);
  const handleRenderShape = (shape: Shape, name: String) => {
    setShowCanvas(true)
    setSelectedShape(shape)
    setShowTitle(name.toString());
  };
  const handleCloseCanvas = () => {
    setSelectedShape(null);
    setShowAllshape(false);
    setShowCanvas(false)
    setShowTitle("");
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      minHeight="100vh"
      sx={{ gap: 2 }}
    >
      <Typography variant="h4" marginTop={7} gutterBottom>
        3D Shape Viewer {showTitle ? `(${showTitle})` : ''}
      </Typography>
      {!showCanvas ? (
        <>
          <Stack spacing={2} direction="row">
            <Button variant="contained" color="primary" onClick={() => setModalOpen(true)}>
              Add Shape
            </Button>
            <Button variant="contained" color="primary" onClick={handleRenderAllShapes}>
              Render
            </Button>
          </Stack>
          <Box width="80%" mt={2}>
            <ShapeTable shapes={shapes} onDelete={deleteShape} onRender={handleRenderShape} />
          </Box>
        </>) : (
        <>
          {showAllShapes && <AllCanvasRenderer shapes={shapes} onClose={handleCloseCanvas} />}
          {selectedShape && <CanvasRenderer shape={selectedShape} onClose={handleCloseCanvas} />}
        </>)
      }
      {modalOpen && <CreateShapeModal onCreate={handleCreateShape} onClose={() => setModalOpen(false)} />}
    </Box>
  );
};

