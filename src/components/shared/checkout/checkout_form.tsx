"use client";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreditCard, Landmark } from "lucide-react";
import { FaPaypal, FaApple } from "react-icons/fa";
import { checkoutSchema, CheckoutSchema } from "@/utils";
import { FormInput } from "@/components/ui";
import { SuccessModal, LoadingButton } from "@/components/shared";

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
  const [loading, setLoading] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const {
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutSchema>({
    resolver: zodResolver(checkoutSchema),

    defaultValues: {
      customerName: "",
      phone: "",
      email: "",
      shippingAddress: "",
      projectNotes: "",

      paymentMethod: "credit-card",

      cardNumber: "",
      expiration: "",
      cvv: "",
    },
  });

  const paymentMethod = watch("paymentMethod");

  const onSubmit = async (data: CheckoutSchema) => {
    try {
      setLoading(true);

      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log(data);

      setSuccessOpen(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SuccessModal open={successOpen} onClose={() => setSuccessOpen(false)} />
        
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <FormInput
            control={control}
            name="customerName"
            label="Full Name"
            error={errors.customerName?.message}
          />

          <FormInput
            control={control}
            name="phone"
            label="Phone"
            error={errors.phone?.message}
          />

          <FormInput
            control={control}
            name="email"
            label="Email"
            type="email"
            error={errors.email?.message}
          />

          <FormInput
            control={control}
            name="shippingAddress"
            label="Shipping Address"
            error={errors.shippingAddress?.message}
          />
        </div>

        <div>
          <h3 className="mb-4 font-heading text-[26px] uppercase">
            Payment Method
          </h3>

          <Controller
            control={control}
            name="paymentMethod"
            render={({ field }) => (
              <div className="grid grid-cols-2 gap-3">
                {paymentMethods.map((method) => {
                  const Icon = method.icon;

                  const active = field.value === method.id;

                  return (
                    <button
                      type="button"
                      key={method.id}
                      onClick={() => field.onChange(method.id)}
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
            )}
          />
        </div>

        {paymentMethod === "credit-card" && (
          <div className="space-y-4">
            <FormInput
              control={control}
              name="cardNumber"
              label="Card Number"
              placeholder="1234 5678 9012 3456"
              error={errors.cardNumber?.message}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormInput
                control={control}
                name="expiration"
                label="Expiration"
                placeholder="MM/YY"
                error={errors.expiration?.message}
              />

              <FormInput
                control={control}
                name="cvv"
                label="CVV"
                placeholder="123"
                error={errors.cvv?.message}
              />
            </div>
          </div>
        )}

        <div>
          <label className="mb-2 block font-heading text-[22px] uppercase">
            Project Notes
          </label>

          <Controller
            control={control}
            name="projectNotes"
            render={({ field }) => (
              <textarea
                rows={5}
                {...field}
                className="
                w-full
                resize-none
                border-2
                border-border
                bg-white
                p-4
                text-sm
              "
              />
            )}
          />
        </div>

        <LoadingButton type="submit" loading={loading}>
          Place Secure Order
        </LoadingButton>
      </form>
    </>
  );
};
