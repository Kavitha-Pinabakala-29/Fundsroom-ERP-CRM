import { Request, Response } from "express";
import { customerSchema } from "../validations/customer.validation";
import { createCustomer } from "../services/customer.service";

import { getCustomers } from "../services/customer.service";

import { getCustomerById } from "../services/customer.service";

import { updateCustomer } from "../services/customer.service";

import { deleteCustomer } from "../services/customer.service";

export const create = async (
    req: Request,
    res: Response
) => {

    try {

        const data = customerSchema.parse(req.body);

        const customer = await createCustomer(data);

        res.status(201).json(customer);

    } catch (err: any) {

        res.status(400).json({
            message: err.message,
        });

    }

};

export const getAll = async (
    req: Request,
    res: Response
) => {

    try {

        const customers = await getCustomers();

        res.json(customers);

    } catch (err: any) {

        res.status(500).json({
            message: err.message,
        });

    }

};

export const getById = async (
    req: Request<{ id: string }>,
    res: Response
) => {

    const customer = await getCustomerById(req.params.id);

    if (!customer) {
        return res.status(404).json({
            message: "Customer not found",
        });
    }

    res.json(customer);
};

export const update = async (
    req: Request<{ id: string }>,
    res: Response
) => {

    const data = customerSchema.parse(req.body);

    const customer = await updateCustomer(
        req.params.id,
        data
    );

    res.json(customer);
};

export const remove = async (
    req: Request<{ id: string }>,
    res: Response
) => {

    await deleteCustomer(req.params.id);

    res.json({
        message: "Customer deleted successfully",
    });
};