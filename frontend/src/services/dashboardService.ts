import api from "../api/axios";

export const getDashboard = async () => {
  const res = await api.get("/dashboard");
  return res.data;
};

export const getRevenue = async () => {
  const res = await api.get("/dashboard/revenue");
  return res.data;
};

export const getOrderStatus = async () => {
  const res = await api.get("/dashboard/order-status");
  return res.data;
};

export const getRecentOrders = async () => {
  const res = await api.get("/dashboard/recent-orders");
  return res.data;
};

export const getRecentCustomers = async () => {
  const res = await api.get("/dashboard/recent-customers");
  return res.data;
};