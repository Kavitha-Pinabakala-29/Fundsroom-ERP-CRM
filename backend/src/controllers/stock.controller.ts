import { Request, Response } from "express";

import { stockSchema } from "../validations/stock.validation";

import {
    stockIn,
    stockOut,
    getHistory,
} from "../services/stock.service";

export const stockInController = async (
    req: Request,
    res: Response
) => {

    try {

        const data = stockSchema.parse(req.body);

        const result = await stockIn(data);

        res.status(201).json(result);

    } catch (err: any) {

        res.status(400).json({
            message: err.message,
        });

    }

};

export const stockOutController = async (
    req: Request,
    res: Response
) => {

    try {

        const data = stockSchema.parse(req.body);

        const result = await stockOut(data);

        res.status(201).json(result);

    } catch (err: any) {

        res.status(400).json({
            message: err.message,
        });

    }

};

export const history = async (
    req: Request<{ productId: string }>,
    res: Response
) => {

    try {

        const result = await getHistory(req.params.productId);

        res.json(result);

    } catch (err: any) {

        res.status(400).json({
            message: err.message,
        });

    }

};