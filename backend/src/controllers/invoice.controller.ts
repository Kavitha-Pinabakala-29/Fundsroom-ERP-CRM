import { Request, Response } from "express";
import { invoiceSchema } from "../validations/invoice.validation";
import {
    createInvoice,
    getInvoices,
    markPaid
} from "../services/invoice.service";

export const create = async (req: Request, res: Response) => {

    try {
        const data = invoiceSchema.parse(req.body);
        res.status(201).json(await createInvoice(data));
    } catch (err: any) {
        res.status(400).json({ message: err.message });
    }

};

export const getAll = async (_req: Request, res: Response) => {

    res.json(await getInvoices());

};

export const pay = async (req: Request<{ id: string }>, res: Response) => {

    try {
        res.json(await markPaid(req.params.id));
    } catch (err: any) {
        res.status(400).json({ message: err.message });
    }

};