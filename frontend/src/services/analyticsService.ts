import api from "../api/axios";

export async function getRevenueAnalytics() {
  const res = await api.get("/analytics/revenue");
  return res.data;
}

export async function getTopProducts() {
  const res = await api.get("/analytics/products");
  return res.data;
}

export async function getCustomerGrowth() {
  const res = await api.get("/analytics/customers");
  return res.data;
}

export async function getOrderAnalytics() {
  const res = await api.get("/analytics/orders");
  return res.data;
}