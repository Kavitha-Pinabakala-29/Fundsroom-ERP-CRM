import api from "../api/axios";

export const getDashboardStats = async () => {
  const res = await api.get("/reports/dashboard");
  return res.data;
};

export const getSalesReport = async () => {
  const res = await api.get("/reports/sales");
  return res.data;
};

export const getProductReport = async () => {
  const res = await api.get("/reports/products");
  return res.data;
};

export const getCustomerReport = async () => {
  const res = await api.get("/reports/customers");
  return res.data;
};