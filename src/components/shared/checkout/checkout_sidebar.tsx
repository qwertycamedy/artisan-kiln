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
  const subtotal = useAppSelector(selectSubtotal);
  const shipping = useAppSelector(selectShipping);
  const grandTotal = useAppSelector(selectGrandTotal);

  return (
    <Panel title="Checkout">
      <div className="space-y-8">
        <CheckoutForm />

        <div className="border-t-2 border-border pt-5">
          <div className="flex items-center justify-between">
            <span className="font-heading text-[28px] uppercase">Subtotal</span>

            <span className="font-heading text-[28px] uppercase">
              ${subtotal.toFixed(2)}
            </span>
          </div>

          <div className="mt-3 flex items-center justify-between">
            <span className="font-heading text-[28px] uppercase">Shipping</span>

            <span className="font-heading text-[28px] uppercase">
              ${shipping.toFixed(2)}
            </span>
          </div>

          <div className="mt-4 flex items-center justify-between border-t-2 border-border pt-4">
            <span className="font-heading text-[34px] uppercase">Total</span>

            <span className="font-heading text-[34px] uppercase">
              ${grandTotal.toFixed(2)}
            </span>
          </div>
        </div>

        <button className="w-full border-2 border-border bg-navy py-4 font-heading text-[30px] uppercase text-white shadow-panel transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none">
          Place Secure Order
        </button>
      </div>
    </Panel>
  );
};
