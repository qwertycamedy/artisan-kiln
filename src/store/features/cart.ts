import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CartItem, Tile } from "@/types";

import { initialTiles } from "@/data/tiles";

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [
    {
      tile: initialTiles[0],
      quantity: 150,
    },

    {
      tile: initialTiles[1],
      quantity: 75,
    },

    {
      tile: initialTiles[2],
      quantity: 200,
    },
  ],
};

export const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {
    addTileToCart: (
      state,
      action: PayloadAction<Tile>
    ) => {
      const existingItem =
        state.items.find(
          (item) =>
            item.tile.id === action.payload.id
        );

      if (existingItem) {
        existingItem.quantity += 1;

        return;
      }

      state.items.push({
        tile: action.payload,
        quantity: 1,
      });
    },

    increaseQuantity: (
      state,
      action: PayloadAction<string>
    ) => {
      const item = state.items.find(
        (item) =>
          item.tile.id === action.payload
      );

      if (!item) return;

      item.quantity += 1;
    },

    decreaseQuantity: (
      state,
      action: PayloadAction<string>
    ) => {
      const item = state.items.find(
        (item) =>
          item.tile.id === action.payload
      );

      if (!item) return;

      if (item.quantity <= 1) {
        state.items = state.items.filter(
          (item) =>
            item.tile.id !== action.payload
        );

        return;
      }

      item.quantity -= 1;
    },

    removeItem: (
      state,
      action: PayloadAction<string>
    ) => {
      state.items = state.items.filter(
        (item) =>
          item.tile.id !== action.payload
      );
    },
  },
});

export const {
  addTileToCart,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} = cartSlice.actions;

export default cartSlice.reducer;