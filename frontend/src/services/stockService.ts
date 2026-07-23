import api from "../api/axios";

export async function stockIn(data: {
  productId: string;
  quantity: number;
}) {
  const res = await api.post("/stock/in", data);
  return res.data;
}

export async function stockOut(data: {
  productId: string;
  quantity: number;
}) {
  const res = await api.post("/stock/out", data);
  return res.data;
}

export async function getHistory(productId: string) {
  const res = await api.get(
    `/stock/history/${productId}`
  );

  return res.data;
}