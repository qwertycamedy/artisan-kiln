import { DesignCell } from "@/types";

const GRID_SIZE = 6;

export function createGrid(): DesignCell[] {
  const cells: DesignCell[] = [];

  for (let row = 0; row < GRID_SIZE; row++) {
    for (let col = 0; col < GRID_SIZE; col++) {
      cells.push({
        row,
        col,
        tileId: null,
      });
    }
  }

  return cells;
}