import { configureStore } from "@reduxjs/toolkit";
import cart from "./features/cart";
import design from "./features/design";
import checkout from "./features/checkout";

export const store = configureStore({
  reducer: {
    cart,
    design,
    checkout,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
