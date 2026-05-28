import { fireEvent, screen } from "@testing-library/react";
import { CartTable } from "@/components/shared";
import { renderWithProviders } from "@/tests/test-utils";

describe("CartTable", () => {
  it("increases quantity", () => {
    renderWithProviders(<CartTable />);

    const quantity = screen.getByTestId("quantity-ocean-wave");

    expect(quantity).toHaveTextContent("10");

    fireEvent.click(screen.getByTestId("increase-ocean-wave"));

    expect(quantity).toHaveTextContent("11");
  });

  it("removes item", () => {
    renderWithProviders(<CartTable />);

    fireEvent.click(screen.getByTestId("remove-ocean-wave"));

    expect(screen.queryByText("Ocean Wave")).not.toBeInTheDocument();
  });
});
