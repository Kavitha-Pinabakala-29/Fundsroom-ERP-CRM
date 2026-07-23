export interface StockHistory {

  id: string;

  type: "IN" | "OUT";

  quantity: number;

  productId: string;

  createdAt: string;

}