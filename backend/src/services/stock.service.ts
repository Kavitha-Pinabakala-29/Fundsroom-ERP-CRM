import prisma from "../config/prisma";
import { StockInput } from "../validations/stock.validation";

export const stockIn = async (data: StockInput) => {

    const product = await prisma.product.findUnique({
        where: {
            id: data.productId,
        },
    });

    if (!product) {
        throw new Error("Product not found");
    }

    await prisma.product.update({
        where: {
            id: data.productId,
        },
        data: {
            stock: {
                increment: data.quantity,
            },
        },
    });

    return await prisma.stockHistory.create({
        data: {
            type: "IN",
            quantity: data.quantity,
            productId: data.productId,
        },
    });

};

export const stockOut = async (data: StockInput) => {

    const product = await prisma.product.findUnique({
        where: {
            id: data.productId,
        },
    });

    if (!product) {
        throw new Error("Product not found");
    }

    if (product.stock < data.quantity) {
        throw new Error("Insufficient stock");
    }

    await prisma.product.update({
        where: {
            id: data.productId,
        },
        data: {
            stock: {
                decrement: data.quantity,
            },
        },
    });

    return await prisma.stockHistory.create({
        data: {
            type: "OUT",
            quantity: data.quantity,
            productId: data.productId,
        },
    });

};

export const getHistory = async (productId: string) => {

    return await prisma.stockHistory.findMany({
        where: {
            productId,
        },
        orderBy: {
            createdAt: "desc",
        },
    });

};