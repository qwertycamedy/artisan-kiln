import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/store";

import { Tile } from "@/types";
import { initialTiles } from "@/data";

interface CartState {
  items: Tile[];
}

const initialState: CartState = {
  items: initialTiles,
};

type UpdateQuantityPayload = {
  tileId: string;
  quantity: number;
};

export const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {
    increaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item.id === action.payload);

      if (!item) return;

      item.quantity += 1;
    },

    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item.id === action.payload);

      if (!item) return;

      if (item.quantity <= 1) return;

      item.quantity -= 1;
    },

    updateQuantity: (state, action: PayloadAction<UpdateQuantityPayload>) => {
      const { tileId, quantity } = action.payload;

      const item = state.items.find((item) => item.id === tileId);

      if (!item) return;

      item.quantity = quantity;
    },

    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const {
  increaseQuantity,
  decreaseQuantity,
  updateQuantity,
  removeItem,
} = cartSlice.actions;
export const cartSel = (state: RootState) => state.cart;
export default cartSlice.reducer;
