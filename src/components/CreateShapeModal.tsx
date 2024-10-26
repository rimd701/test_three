import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button, MenuItem } from '@mui/material';
import { ShapeType, Shape } from '../types';

interface CreateShapeModalProps {
  onCreate: (shape: Shape) => void;
  onClose: () => void;
}

const shapeTypes: ShapeType[] = ['Sphere', 'Cube', 'Cylinder', 'Cone'];

export const CreateShapeModal: React.FC<CreateShapeModalProps> = ({ onCreate, onClose }) => {
  const [name, setName] = useState('');
  const [type, setType] = useState<ShapeType | ''>('');

  const handleCreate = () => {
    if (name && type) {
      onCreate({
        id: Date.now(),
        name,
        type,
      });
      onClose();
    }
  };

  return (
    <Dialog open onClose={onClose}>
      <DialogTitle>Create New Shape</DialogTitle>
      <DialogContent sx={{ '& .MuiTextField-root': { m: 1, width: '95%' } }}>
        <TextField label="Name" fullWidth value={name} onChange={(e) => setName(e.target.value)} required />
        <TextField label="Shape Type" select fullWidth value={type} onChange={(e) => setType(e.target.value as ShapeType)} required>
          {shapeTypes.map((shapeType) => (
            <MenuItem key={shapeType} value={shapeType}>
              {shapeType}
            </MenuItem>
          ))}
        </TextField>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleCreate} variant="contained" color="primary" disabled={!name || !type}>
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};
