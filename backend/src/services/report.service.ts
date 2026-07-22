import prisma from "../config/prisma";

export const getSalesReport = async () => {

    const totalOrders = await prisma.order.count();

    const revenue = await prisma.order.aggregate({
        _sum: {
            total: true,
        },
    });

    const paidInvoices = await prisma.invoice.count({
        where: {
            paid: true,
        },
    });

    const unpaidInvoices = await prisma.invoice.count({
        where: {
            paid: false,
        },
    });

    return {
        totalOrders,
        totalRevenue: revenue._sum.total ?? 0,
        paidInvoices,
        unpaidInvoices,
    };
};

export const getInventoryReport = async () => {

    return await prisma.product.findMany({
        orderBy: {
            stock: "asc",
        },
        select: {
            id: true,
            name: true,
            sku: true,
            stock: true,
            price: true,
        },
    });

};