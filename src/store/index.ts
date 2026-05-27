import { configureStore } from "@reduxjs/toolkit";
import cart from "./features/cart";
import design from "./features/design";

export const store = configureStore({
  reducer: {
    cart,
    design,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
