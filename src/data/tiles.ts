import { Tile } from "@/types";
import tile_1 from "@/assets/img/tile_1.jpg";
import tile_2 from "@/assets/img/tile_2.jpg";
import tile_3 from "@/assets/img/tile_3.jpg";
import tile_4 from "@/assets/img/tile_4.jpg";

export const initialTiles: Tile[] = [
  {
    id: "ocean-wave",
    category: "ocean-wave",

    name: "Ocean Wave",

    price: 28,

    preview: tile_1,
    pattern: tile_1,
  },

  {
    id: "forest-fern",
    category: "forest-fern",

    name: "Forest Fern",

    price: 30,

    preview: tile_2,
    pattern: tile_2,
  },

  {
    id: "terracotta-dot",
    category: "terracotta-dot",

    name: "Terracotta Dot",

    price: 26,

    preview: tile_3,
    pattern: tile_3,
  },

  {
    id: "yellow-star",
    category: "yellow-star",

    name: "Yellow Star",

    price: 29,

    preview: tile_4,
    pattern: tile_4,
  },
];
