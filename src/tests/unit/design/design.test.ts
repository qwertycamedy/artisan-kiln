import reducer, { placeTile, removeTile } from "@/store/features/design";
import { createGrid } from "@/utils";

describe("designSlice", () => {
  it("places tile into grid", () => {
    const state = reducer(
      {
        selectedTileId: null,

        cells: createGrid(),
      },

      placeTile({
        row: 1,
        col: 2,
        tileId: "ocean-wave",
      }),
    );

    const cell = state.cells.find((cell) => cell.row === 1 && cell.col === 2);

    expect(cell?.tileId).toBe("ocean-wave");
  });

  it("removes tile from grid", () => {
    const state = reducer(
      {
        selectedTileId: null,

        cells: [
          {
            row: 0,
            col: 0,
            tileId: "ocean-wave",
          },
        ],
      },

      removeTile({
        row: 0,
        col: 0,
      }),
    );

    expect(state.cells[0].tileId).toBeNull();
  });
});
