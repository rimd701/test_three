import { useState, useEffect } from "react";
import { Shape } from "../types";

export const useShapesStorage = () => {
  const [shapes, setShapes] = useState<Shape[]>([]);

  useEffect(() => {
    const storedShapes = localStorage.getItem("shapes");
    if (storedShapes) {
      setShapes(JSON.parse(storedShapes));
    }
  }, []);

  useEffect(() => {
    if (shapes.length > 0)
      localStorage.setItem("shapes", JSON.stringify(shapes));
  }, [shapes]);

  const addShape = (shape: Shape) => {
    setShapes((prevShapes) => [...prevShapes, shape]);
  };

  const deleteShape = (id: number) => {
    setShapes((prevShapes) => prevShapes.filter((shape) => shape.id !== id));
  };

  return {
    shapes,
    addShape,
    deleteShape,
  };
};
