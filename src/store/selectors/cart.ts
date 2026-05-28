import { RootState } from "@/store";

export const selectCartItems = (state: RootState) => state.cart.items;

export const selectSubtotal = (state: RootState) => {
  return state.cart.items.reduce((total, item) => {
    return total + item.tile.price * item.quantity;
  }, 0);
};

export const selectShipping = (state: RootState) => {
  const subtotal = selectSubtotal(state);

  return subtotal > 500 ? 0 : 25;
};

export const selectGrandTotal = (state: RootState) => {
  const subtotal = selectSubtotal(state);
  const shipping = selectShipping(state);

  return subtotal + shipping;
};

export const selectCartQuantity = (
  state: RootState
) => {
  return state.cart.items.reduce(
    (total, item) => {
      return total + item.quantity;
    },
    0
  );
};