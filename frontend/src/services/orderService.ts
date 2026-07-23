import api from "../api/axios";

export const getOrders = async () => {
  const response = await api.get("/orders");
  return response.data;
};

export const createOrder = async (data: any) => {
  const response = await api.post("/orders", data);
  return response.data;
};

export const updateOrder = async (
  id: string,
  data: any
) => {
  const response = await api.patch(
    `/orders/${id}`,
    data
  );

  return response.data;
};

export const deleteOrder = async (
  id: string
) => {
  const response = await api.delete(
    `/orders/${id}`
  );

  return response.data;
};

export const getOrderById = async (
  id: string
) => {
  const response = await api.get(
    `/orders/${id}`
  );

  return response.data;
};