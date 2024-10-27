import { Shape } from "../types";

export const getLocalStorage = (): Shape[] | null => {
  const shapes = localStorage.getItem("shapes");
  return shapes ? JSON.parse(shapes) : [];
};

export const setLocalStorage = (shapes: Shape[]) => {
  localStorage.setItem("shapes", JSON.stringify(shapes));
};
