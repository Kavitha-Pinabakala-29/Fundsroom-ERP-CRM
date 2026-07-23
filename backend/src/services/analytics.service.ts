import prisma from "../config/prisma";

export async function revenueAnalytics() {

  const revenue = await prisma.payment.aggregate({
    _sum: {
      amount: true,
    },
  });

  return {
    totalRevenue: revenue._sum.amount ?? 0,
  };

}

export async function topProducts() {

  return prisma.product.findMany({

    orderBy: {
      stock: "asc",
    },

    take: 5,

  });

}

export async function customerGrowth() {

  return prisma.customer.findMany({

    orderBy: {
      createdAt: "asc",
    },

  });

}

export async function orderAnalytics() {

  return prisma.order.findMany({

    include: {
      customer: true,
    },

    orderBy: {
      createdAt: "desc",
    },

  });

}