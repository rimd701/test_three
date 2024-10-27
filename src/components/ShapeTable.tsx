import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Button } from '@mui/material';
import { Shape } from '../types';

interface ShapeTableProps {
  shapes: Shape[];
  onDelete: (id: number) => void;
  onRender: (shape: Shape, name: String) => void;
}

export const ShapeTable: React.FC<ShapeTableProps> = ({ shapes, onDelete, onRender }) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>ID</TableCell>
        <TableCell>Name</TableCell>
        <TableCell>Type</TableCell>
        <TableCell>Actions</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {shapes.map((shape) => (
        <TableRow key={shape.id}>
          <TableCell>{shape.id}</TableCell>
          <TableCell>{shape.name}</TableCell>
          <TableCell>{shape.type}</TableCell>
          <TableCell>
            <Button onClick={() => onRender(shape, shape.name)} color="primary">Render</Button>
            <Button onClick={() => onDelete(shape.id)} color="secondary">Delete</Button>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);
