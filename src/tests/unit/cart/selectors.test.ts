import {
  selectSubtotal,
  selectShipping,
  selectGrandTotal,
} from "@/store/selectors/cart";

describe("cart selectors", () => {
  const mockState = {
    cart: {
      items: [
        {
          tile: {
            id: "1",
            name: "Ocean Wave",
            price: 28,
          },

          quantity: 2,
        },

        {
          tile: {
            id: "2",
            name: "Forest Fern",
            price: 30,
          },

          quantity: 3,
        },
      ],
    },
  };

  it("calculates subtotal", () => {
    expect(selectSubtotal(mockState as never)).toBe(146);
  });

  it("calculates shipping", () => {
    expect(selectShipping(mockState as never)).toBe(25);
  });

  it("calculates grand total", () => {
    expect(selectGrandTotal(mockState as never)).toBe(171);
  });
});
