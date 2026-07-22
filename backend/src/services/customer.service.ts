import prisma from "../config/prisma";
import { CustomerInput } from "../validations/customer.validation";

export const createCustomer = async (data: CustomerInput) => {

    return await prisma.customer.create({
        data,
    });

};

export const getCustomers = async () => {

    return await prisma.customer.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });

};

export const getCustomerById = async (id: string) => {
    return await prisma.customer.findUnique({
        where: { id },
    });
};

export const updateCustomer = async (
    id: string,
    data: CustomerInput
) => {
    return await prisma.customer.update({
        where: { id },
        data,
    });
};

export const deleteCustomer = async (id: string) => {
    await prisma.customer.delete({
        where: { id },
    });
};