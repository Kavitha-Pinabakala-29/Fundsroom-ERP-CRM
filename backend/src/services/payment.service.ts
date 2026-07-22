import prisma from "../config/prisma";
import { PaymentInput } from "../validations/payment.validation";

export const createPayment = async (data: PaymentInput) => {

    const invoice = await prisma.invoice.findUnique({
        where: { id: data.invoiceId },
    });

    if (!invoice) {
        throw new Error("Invoice not found");
    }

    const payment = await prisma.payment.create({
        data,
    });

    await prisma.invoice.update({
        where: { id: data.invoiceId },
        data: {
            paid: true,
        },
    });

    return payment;
};

export const getPayments = async () => {
    return await prisma.payment.findMany({
        include: {
            invoice: true,
        },
        orderBy: {
            createdAt: "desc",
        },
    });
};