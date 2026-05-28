import { checkoutSchema } from "@/utils";

describe("checkoutSchema", () => {
  it("validates correct form", () => {
    const result = checkoutSchema.safeParse({
      customerName: "John Doe",

      phone: "123456789",

      email: "john@test.com",

      shippingAddress: "123 Main Street",

      projectNotes: "",

      paymentMethod: "credit-card",

      cardNumber: "1234567812345678",

      expiration: "12/25",

      cvv: "123",
    });

    expect(result.success).toBe(true);
  });

  it("rejects invalid email", () => {
    const result = checkoutSchema.safeParse({
      customerName: "John",

      phone: "123456",

      email: "wrong-email",

      shippingAddress: "Street",

      projectNotes: "",

      paymentMethod: "paypal",

      cardNumber: "",

      expiration: "",

      cvv: "",
    });

    expect(result.success).toBe(false);
  });

  it("requires valid card fields", () => {
    const result = checkoutSchema.safeParse({
      customerName: "John",

      phone: "123456",

      email: "john@test.com",

      shippingAddress: "Street",

      projectNotes: "",

      paymentMethod: "credit-card",

      cardNumber: "123",

      expiration: "1",

      cvv: "1",
    });

    expect(result.success).toBe(false);
  });
});
