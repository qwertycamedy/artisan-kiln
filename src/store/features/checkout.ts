import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  CheckoutFormState,
  PaymentMethod,
} from "@/types";

const initialState: CheckoutFormState = {
  customerName: "",
  phone: "",
  email: "",
  shippingAddress: "",
  projectNotes: "",

  paymentMethod: "credit-card",

  cardNumber: "",
  expiration: "",
  cvv: "",
};

type UpdateFieldPayload = {
  field: keyof CheckoutFormState;
  value: string;
};

export const checkoutSlice = createSlice({
  name: "checkout",

  initialState,

  reducers: {
    updateField: (
      state,
      action: PayloadAction<UpdateFieldPayload>
    ) => {
      const { field, value } = action.payload;

      state[field] = value as never;
    },

    setPaymentMethod: (
      state,
      action: PayloadAction<PaymentMethod>
    ) => {
      state.paymentMethod = action.payload;
    },

    resetCheckout: () => initialState,
  },
});

export const {
  updateField,
  setPaymentMethod,
  resetCheckout,
} = checkoutSlice.actions;

export default checkoutSlice.reducer;