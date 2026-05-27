import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/store";

import { DesignGridState } from "@/types";
import { createGrid } from "@/utils";

const initialState: DesignGridState = {
  selectedTileId: null,

  cells: createGrid(),
};

type PlaceTilePayload = {
  row: number;
  col: number;

  tileId: string;
};

type RemoveTilePayload = {
  row: number;
  col: number;
};

export const designSlice = createSlice({
  name: "design",

  initialState,

  reducers: {
    selectTile: (state, action: PayloadAction<string>) => {
      state.selectedTileId = action.payload;
    },

    clearSelectedTile: (state) => {
      state.selectedTileId = null;
    },

    placeTile: (state, action: PayloadAction<PlaceTilePayload>) => {
      const { row, col, tileId } = action.payload;

      const cell = state.cells.find(
        (cell) => cell.row === row && cell.col === col,
      );

      if (!cell) return;

      cell.tileId = tileId;
    },

    removeTile: (state, action: PayloadAction<RemoveTilePayload>) => {
      const { row, col } = action.payload;

      const cell = state.cells.find(
        (cell) => cell.row === row && cell.col === col,
      );

      if (!cell) return;

      cell.tileId = null;
    },

    resetGrid: (state) => {
      state.cells = createGrid();
    },
  },
});

export const {
  selectTile,
  clearSelectedTile,

  placeTile,
  removeTile,

  resetGrid,
} = designSlice.actions;
export const designSel = (state: RootState) => state.design;
export default designSlice.reducer;
