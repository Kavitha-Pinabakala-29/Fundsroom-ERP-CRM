import api from "../api/axios";

import type { Order } from "../types/order";

export async function getOrders(): Promise<Order[]> {

  const res = await api.get("/orders");

  return res.data;

}

export async function createOrder(data: {

  customerId: string;

  items: {

    productId: string;

    quantity: number;

  }[];

}) {

  const res = await api.post("/orders", data);

  return res.data;

}

export async function updateOrderStatus(

  id: string,

  status: string

) {

  const res = await api.patch(

    `/orders/${id}/status`,

    { status }

  );

  return res.data;

}

export async function deleteOrder(id: string) {

  const res = await api.delete(

    `/orders/${id}`

  );

  return res.data;

}