import prisma from "../config/prisma";
import { ProductInput } from "../validations/product.validation";

export const createProduct = async (data: ProductInput) => {
    return await prisma.product.create({
        data,
    });
};

export const getProducts = async () => {
    return await prisma.product.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });
};

export const getProductById = async (id: string) => {
    return await prisma.product.findUnique({
        where: { id },
    });
};

export const updateProduct = async (
    id: string,
    data: ProductInput
) => {
    return await prisma.product.update({
        where: { id },
        data,
    });
};

export const deleteProduct = async (id: string) => {
    await prisma.product.delete({
        where: { id },
    });

    return {
        message: "Product deleted successfully",
    };
};

export const updateStock = async (
    id: string,
    stock: number
) => {
    return await prisma.product.update({
        where: { id },
        data: {
            stock,
        },
    });
};