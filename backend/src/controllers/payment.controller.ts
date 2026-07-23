import { Request, Response } from "express";
import { paymentSchema } from "../validations/payment.validation";

import {
    createPayment,
    getPayments,
    getPaymentById,
    deletePayment,
} from "../services/payment.service";

export const create = async (
    req: Request,
    res: Response
) => {

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

export const getAll = async (
    _req: Request,
    res: Response
) => {

    res.json(await getPayments());

};

export const getOne = async (
    req: Request<{ id: string }>,
    res: Response
) => {

    try {

        res.json(
            await getPaymentById(req.params.id)
        );

    } catch (err: any) {

        res.status(404).json({
            message: err.message,
        });

    }

};

export const remove = async (
    req: Request<{ id: string }>,
    res: Response
) => {

    try {

        res.json(
            await deletePayment(req.params.id)
        );

    } catch (err: any) {

        res.status(404).json({
            message: err.message,
        });

    }

};