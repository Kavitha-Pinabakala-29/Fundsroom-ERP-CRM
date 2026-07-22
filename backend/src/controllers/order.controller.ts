import { Request, Response } from "express";

import { orderSchema } from "../validations/order.validation";

import { updateOrderStatus } from "../services/order.service";

import {
    createOrder,
    getOrders,
    getOrderById,
    deleteOrder,
} from "../services/order.service";

export const create = async (req: Request, res: Response) => {

    try {

        const data = orderSchema.parse(req.body);

        const order = await createOrder(data);

        res.status(201).json(order);

    } catch (err: any) {

        res.status(400).json({
            message: err.message,
        });

    }

};

export const getAll = async (req: Request, res: Response) => {

    res.json(await getOrders());

};

export const getOne = async (req: Request<{ id: string }>, res: Response) => {

    try {

        res.json(await getOrderById(req.params.id));

    } catch (err: any) {

        res.status(404).json({
            message: err.message,
        });

    }

};

export const update = async (req: Request<{ id: string }>, res: Response) => {

    try {

        const order = await updateOrderStatus(
            req.params.id,
            req.body.status
        );

        res.json(order);

    } catch (err: any) {

        res.status(400).json({
            message: err.message,
        });

    }

};

export const remove = async (req: Request<{ id: string }>, res: Response) => {

    try {

        res.json(await deleteOrder(req.params.id));

    } catch (err: any) {

        res.status(404).json({
            message: err.message,
        });

    }

};

export const updateStatus = async (
    req: Request<{ id: string }>,
    res: Response
) => {

    try {

        const order = await updateOrderStatus(
            req.params.id,
            req.body.status
        );

        res.json(order);

    } catch (err: any) {

        res.status(400).json({
            message: err.message,
        });

    }

};