import prisma from "../config/prisma";

export async function dashboardStats() {

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

}

export async function revenueChart() {

  const payments = await prisma.payment.findMany({
    orderBy: {
      createdAt: "asc",
    },
  });

  return payments.map((payment) => ({
    month: payment.createdAt.toLocaleDateString(
      "en-US",
      {
        month: "short",
      }
    ),
    revenue: payment.amount,
  }));

}

export async function orderStatusChart() {

  const pending = await prisma.order.count({
    where: {
      status: "PENDING",
    },
  });

  const confirmed = await prisma.order.count({
    where: {
      status: "CONFIRMED",
    },
  });

  const cancelled = await prisma.order.count({
    where: {
      status: "CANCELLED",
    },
  });

  return [
    {
      name: "Pending",
      value: pending,
    },
    {
      name: "Confirmed",
      value: confirmed,
    },
    {
      name: "Cancelled",
      value: cancelled,
    },
  ];

}

export async function recentOrders() {

  return prisma.order.findMany({
    include: {
      customer: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 5,
  });

}

export async function recentCustomers() {

  return prisma.customer.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 5,
  });

}