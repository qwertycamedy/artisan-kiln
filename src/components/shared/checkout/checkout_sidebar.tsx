"use client";

import { Panel } from "@/components/ui";
import { CheckoutForm } from "@/components/shared";
import {
  selectGrandTotal,
  selectShipping,
  selectSubtotal,
} from "@/store/selectors/cart";
import { useAppSelector } from "@/hooks";

export const CheckoutSidebar = () => {

  return (
    <Panel title="Checkout">
      <div className="space-y-8">
        <CheckoutForm />
      </div>
    </Panel>
  );
};
