import prisma from "../config/prisma";
import { InvoiceInput } from "../validations/invoice.validation";

export const createInvoice = async (data: InvoiceInput) => {

    const order = await prisma.order.findUnique({
        where: { id: data.orderId }
    });

    if (!order)
        throw new Error("Order not found");

    return await prisma.invoice.create({
        data: {
            orderId: order.id,
            invoiceNo: `INV-${Date.now()}`,
            amount: order.total
        }
    });

};

export const getInvoices = async () => {

    return await prisma.invoice.findMany({
        include: {
            order: true
        },
        orderBy: {
            createdAt: "desc"
        }
    });

};

export const markPaid = async (id: string) => {

    return await prisma.invoice.update({
        where: { id },
        data: {
            paid: true
        }
    });

};