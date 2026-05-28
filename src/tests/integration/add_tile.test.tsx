import { fireEvent, screen } from "@testing-library/react";
import { AddTilesModal } from "@/components/shared";
import { renderWithProviders } from "@/tests/test-utils";

describe("AddTilesModal", () => {
  it("renders modal content", () => {
    renderWithProviders(<AddTilesModal open={true} onClose={() => {}} />);

    expect(screen.getByText(/add new tile/i)).toBeInTheDocument();
  });

  it("adds tile to cart", () => {
    renderWithProviders(<AddTilesModal open={true} onClose={() => {}} />);

    fireEvent.click(screen.getByText(/yellow star/i));

    expect(screen.getByText(/yellow star/i)).toBeInTheDocument();
  });
});
