import { fireEvent, screen } from "@testing-library/react";
import { CheckoutForm } from "@/components/shared";
import { renderWithProviders } from "@/tests/test-utils";

describe("CheckoutForm", () => {
  it("shows validation errors", async () => {
    renderWithProviders(<CheckoutForm />);

    fireEvent.click(
      screen.getByRole("button", {
        name: /place secure order/i,
      }),
    );

    expect(await screen.findByText(/invalid email/i)).toBeInTheDocument();
  });

  it("switches payment method", () => {
    renderWithProviders(<CheckoutForm />);

    fireEvent.click(screen.getByText(/paypal/i));

    expect(screen.queryByText(/card number/i)).not.toBeInTheDocument();
  });
});
