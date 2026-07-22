import { Request, Response } from "express";
import { paymentSchema } from "../validations/payment.validation";
import { createPayment, getPayments } from "../services/payment.service";

export const create = async (req: Request, res: Response) => {
    try {
        const data = paymentSchema.parse(req.body);
        const payment = await createPayment(data);
        res.status(201).json(payment);
    } catch (err: any) {
        res.status(400).json({
            message: err.message,
        });
    }
};

export const getAll = async (_req: Request, res: Response) => {
    const payments = await getPayments();
    res.json(payments);
};