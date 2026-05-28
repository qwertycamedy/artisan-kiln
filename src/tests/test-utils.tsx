import { ReactNode } from "react";

import { Provider } from "react-redux";

import { configureStore } from "@reduxjs/toolkit";

import { render } from "@testing-library/react";

import cart from "@/store/features/cart";
import design from "@/store/features/design";
import checkout from "@/store/features/checkout";

type Props = {
  children: ReactNode;
};

export function renderWithProviders(ui: React.ReactElement) {
  const store = configureStore({
    reducer: {
      cart: cart,
      design: design,
      checkout: checkout,
    },
  });

  function Wrapper({ children }: Props) {
    return <Provider store={store}>{children}</Provider>;
  }

  return render(ui, {
    wrapper: Wrapper,
  });
}
