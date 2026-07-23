import api from "../api/axios";

import type { StockHistory } from "../types/stock";

export const stockIn = async (data: any) => {
  const res = await api.post("/stock/in", data);
  return res.data;
};

export const stockOut = async (data: any) => {
  const res = await api.post("/stock/out", data);
  return res.data;
};

export const getStockHistory = async (
  productId: string
): Promise<StockHistory[]> => {

  const res = await api.get(
    `/stock/history/${productId}`
  );

  return res.data;
};