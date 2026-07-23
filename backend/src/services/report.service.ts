import prisma from "../config/prisma";

export const getDashboardStats = async () => {
  const customers = await prisma.customer.count();

  const products = await prisma.product.count();

  const orders = await prisma.order.count();

  const invoices = await prisma.invoice.count();

  const payments = await prisma.payment.count();

  const revenue = await prisma.payment.aggregate({
    _sum: {
      amount: true,
    },
  });

  return {
    customers,
    products,
    orders,
    invoices,
    payments,
    revenue: revenue._sum.amount ?? 0,
  };
};

export const getSalesReport = async () => {
  return await prisma.payment.findMany({
    include: {
      invoice: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const getProductReport = async () => {
  return await prisma.product.findMany({
    orderBy: {
      stock: "asc",
    },
  });
};

export const getCustomerReport = async () => {
  const customers = await prisma.customer.findMany({
    include: {
      orders: true,
    },
  });

  return customers.map((customer) => ({
    id: customer.id,
    name: customer.name,
    email: customer.email,
    orders: customer.orders.length,
    totalSpent: customer.orders.reduce(
      (sum, order) => sum + order.total,
      0
    ),
  }));
};