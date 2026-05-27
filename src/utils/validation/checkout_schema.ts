import { z } from "zod";

export const checkoutSchema = z.object({
  customerName: z
    .string()
    .min(2, "Name is required"),

  phone: z
    .string()
    .min(5, "Phone is required"),

  email: z
    .string()
    .email("Invalid email address"),

  shippingAddress: z
    .string()
    .min(5, "Address is required"),

  projectNotes: z.string(),

  paymentMethod: z.enum([
    "credit-card",
    "paypal",
    "apple-pay",
    "bank-transfer",
  ]),

  cardNumber: z.string(),

  expiration: z.string(),

  cvv: z.string(),
})
.superRefine((data, ctx) => {
  if (data.paymentMethod !== "credit-card") {
    return;
  }

  if (data.cardNumber.length < 16) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ["cardNumber"],
      message: "Invalid card number",
    });
  }

  if (!/^\d{2}\/\d{2}$/.test(data.expiration)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ["expiration"],
      message: "Invalid expiration",
    });
  }

  if (data.cvv.length < 3) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ["cvv"],
      message: "Invalid CVV",
    });
  }
});

export type CheckoutSchema =
  z.infer<typeof checkoutSchema>;