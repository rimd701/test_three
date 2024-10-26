export type ShapeType = 'Sphere' | 'Cube' | 'Cylinder' | 'Cone';

export interface Shape {
  id: number;
  name: string;
  type: ShapeType;
}