import reducer, {
  addTileToCart,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from "@/store/features/cart";
import { Tile } from "@/types";
import tile_1 from "@/assets/img/tile_1.jpg";

describe("cartSlice", () => {
  const tile: Tile = {
    id: "tile-1",

    category: "ocean-wave",

    name: "Ocean Wave",

    price: 28,

    preview: tile_1,

    pattern: tile_1,
  };

  it("adds tile to cart", () => {
    const state = reducer(
      {
        items: [],
        cartHighlighted: false,
      },

      addTileToCart(tile),
    );

    expect(state.items.length).toBe(1);

    expect(state.items[0].quantity).toBe(1);
  });

  it("increases quantity", () => {
    const state = reducer(
      {
        items: [
          {
            tile,
            quantity: 1,
          },
        ],
        cartHighlighted: false,
      },

      increaseQuantity(tile.id),
    );

    expect(state.items[0].quantity).toBe(2);
  });

  it("decreases quantity", () => {
    const state = reducer(
      {
        items: [
          {
            tile,
            quantity: 5,
          },
        ],
        cartHighlighted: false,
      },

      decreaseQuantity(tile.id),
    );

    expect(state.items[0].quantity).toBe(4);
  });

  it("removes item", () => {
    const state = reducer(
      {
        items: [
          {
            tile,
            quantity: 1,
          },
        ],
        cartHighlighted: false,
      },

      removeItem(tile.id),
    );

    expect(state.items.length).toBe(0);
  });
});
