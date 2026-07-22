import prisma from "../config/prisma";
import { OrderInput } from "../validations/order.validation";

export const createOrder = async (data: OrderInput) => {

    const customer = await prisma.customer.findUnique({
        where: {
            id: data.customerId,
        },
    });

    if (!customer) {
        throw new Error("Customer not found");
    }

    let total = 0;

    for (const item of data.items) {

        const product = await prisma.product.findUnique({
            where: {
                id: item.productId,
            },
        });

        if (!product) {
            throw new Error("Product not found");
        }

        if (product.stock < item.quantity) {
            throw new Error(`Insufficient stock for ${product.name}`);
        }

        total += product.price * item.quantity;
    }

    const order = await prisma.order.create({
        data: {
            customerId: data.customerId,
            total,
        },
    });

    for (const item of data.items) {

        const product = await prisma.product.findUnique({
            where: {
                id: item.productId,
            },
        });

        await prisma.orderItem.create({
            data: {
                orderId: order.id,
                productId: item.productId,
                quantity: item.quantity,
                price: product!.price,
            },
        });

        await prisma.product.update({
            where: {
                id: item.productId,
            },
            data: {
                stock: {
                    decrement: item.quantity,
                },
            },
        });
    }

    return await prisma.order.findUnique({
        where: {
            id: order.id,
        },
        include: {
            customer: true,
            items: {
                include: {
                    product: true,
                },
            },
        },
    });

};

export const getOrders = async () => {

    return await prisma.order.findMany({
        include: {
            customer: true,
            items: {
                include: {
                    product: true,
                },
            },
        },
        orderBy: {
            createdAt: "desc",
        },
    });

};

export const getOrderById = async (id: string) => {

    const order = await prisma.order.findUnique({
        where: {
            id,
        },
        include: {
            customer: true,
            items: {
                include: {
                    product: true,
                },
            },
        },
    });

    if (!order) {
        throw new Error("Order not found");
    }

    return order;

};

export const updateStatus = async (
    id: string,
    status: any
) => {

    return await prisma.order.update({
        where: {
            id,
        },
        data: {
            status,
        },
    });

};

export const deleteOrder = async (id: string) => {

    await prisma.order.delete({
        where: {
            id,
        },
    });

    return {
        message: "Order deleted successfully",
    };

};

export const updateOrderStatus = async (
    id: string,
    status: any
) => {

    return await prisma.order.update({
        where: { id },
        data: { status },
    });

};