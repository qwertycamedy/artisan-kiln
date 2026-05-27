export type TileCategory =
  | "ocean-wave"
  | "forest-fern"
  | "terracotta-dot"
  | "yellow-star";

export type PaymentMethod =
  | "credit-card"
  | "paypal"
  | "apple-pay"
  | "bank-transfer";

export interface Tile {
  id: string;
  category: TileCategory;

  name: string;

  price: number;

  preview: string;
  pattern: string;

  quantity: number;
}

export interface CartItem {
  tileId: string;
  quantity: number;
}

export interface DesignCell {
  row: number;
  col: number;

  tileId: string | null;
}

export interface DesignGridState {
  selectedTileId: string | null;

  cells: DesignCell[];
}

export interface CartState {
  items: Tile[];
}

export interface CheckoutFormState {
  customerName: string;
  phone: string;
  email: string;
  shippingAddress: string;
  projectNotes: string;

  paymentMethod: PaymentMethod;

  cardNumber: string;
  expiration: string;
  cvv: string;
}