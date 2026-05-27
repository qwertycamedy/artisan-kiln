"use client";

import { CreditCard, Landmark } from "lucide-react";
import { FaPaypal, FaApple } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setPaymentMethod, updateField } from "@/store/features/checkout";
import { RootState } from "@/store";

const paymentMethods = [
  {
    id: "credit-card",
    label: "Credit Card",
    icon: CreditCard,
  },

  {
    id: "paypal",
    label: "PayPal",
    icon: FaPaypal,
  },

  {
    id: "apple-pay",
    label: "Apple Pay",
    icon: FaApple,
  },

  {
    id: "bank-transfer",
    label: "Bank Transfer",
    icon: Landmark,
  },
];

export const CheckoutForm = () => {
  const dispatch = useAppDispatch();
  const form = useAppSelector((state: RootState) => state.checkout);

  const update = (field: string, value: string) => {
    dispatch(
      updateField({
        field: field as never,
        value,
      }),
    );
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <Input
          label="Full Name"
          value={form.customerName}
          onChange={(value) => update("customerName", value)}
          required
        />

        <Input
          label="Phone"
          value={form.phone}
          onChange={(value) => update("phone", value)}
        />

        <Input
          label="Email"
          value={form.email}
          onChange={(value) => update("email", value)}
          required
          type="email"
        />

        <Input
          label="Shipping Address"
          value={form.shippingAddress}
          onChange={(value) => update("shippingAddress", value)}
          required
        />
      </div>

      <div>
        <h3 className="mb-4 font-heading text-[26px] uppercase">
          Payment Method
        </h3>

        <div className="grid grid-cols-2 gap-3">
          {paymentMethods.map((method) => {
            const Icon = method.icon;

            const active = form.paymentMethod === method.id;

            return (
              <button
                key={method.id}
                onClick={() => dispatch(setPaymentMethod(method.id as never))}
                className={`
                  flex
                  items-center
                  gap-3
                  border-2
                  border-border
                  px-4
                  py-4
                  transition

                  ${active ? "bg-navy text-white" : "bg-white"}
                `}
              >
                <Icon size={20} />

                <span className="font-heading text-lg uppercase">
                  {method.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {form.paymentMethod === "credit-card" && (
        <div className="space-y-4">
          <Input
            label="Card Number"
            value={form.cardNumber}
            onChange={(value) => update("cardNumber", value)}
            placeholder="1234 5678 9012 3456"
          />

          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Expiration"
              value={form.expiration}
              onChange={(value) => update("expiration", value)}
              placeholder="MM/YY"
            />

            <Input
              label="CVV"
              value={form.cvv}
              onChange={(value) => update("cvv", value)}
              placeholder="123"
            />
          </div>
        </div>
      )}

      <div>
        <label className="mb-2 block font-heading text-[22px] uppercase">
          Project Notes
        </label>

        <textarea
          rows={5}
          value={form.projectNotes}
          onChange={(e) => update("projectNotes", e.target.value)}
          className="
            w-full
            resize-none
            border-2
            border-border
            bg-white
            p-4
            text-sm
            outline-none
          "
          placeholder="Additional information..."
        />
      </div>
    </div>
  );
};

type InputProps = {
  label: string;

  value: string;

  onChange: (value: string) => void;

  placeholder?: string;

  type?: string;

  required?: boolean;
};

const Input = ({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
}: InputProps) => {
  return (
    <div>
      <label className="mb-2 block font-heading text-[22px] uppercase">
        {label}

        {required && <span className="ml-1 text-[#D2875C]">*</span>}
      </label>

      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="
          h-14
          w-full
          border-2
          border-border
          bg-white
          px-4
          text-sm
          outline-none
        "
      />
    </div>
  );
};
