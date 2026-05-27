import { Panel } from "@/components/ui";

export const CheckoutSidebar = () => {
  return (
    <Panel title="Order Summary">
      <div className="space-y-6">
        <div className="space-y-4">
          <div className="h-7 border-b-2 border-border" />
          <div className="h-7 border-b-2 border-border" />
          <div className="h-7 border-b-2 border-border" />
          <div className="h-7 border-b-2 border-border" />
        </div>

        <div className="border-t-2 border-border pt-5">
          <div className="flex items-center justify-between font-heading text-2xl uppercase">
            <span>Subtotal</span>
            <span>$266</span>
          </div>

          <div className="mt-3 flex items-center justify-between font-heading text-2xl uppercase">
            <span>Shipping</span>
            <span>$0</span>
          </div>

          <div className="mt-3 flex items-center justify-between font-heading text-3xl uppercase">
            <span>Total</span>
            <span>$299</span>
          </div>
        </div>

        <button className="w-full border-2 border-border bg-navy py-4 font-heading text-2xl uppercase text-white shadow-panel transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none">
          Place Secure Order
        </button>
      </div>
    </Panel>
  );
};
