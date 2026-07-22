import { Request, Response } from "express";

import { leadSchema } from "../validations/lead.validation";
import {
    createLead,
    getLeads,
    getLeadById,
    updateLead,
    deleteLead
} from "../services/lead.service";

import { updateLeadStatus } from "../services/lead.service";

export const create = async (
    req: Request,
    res: Response
) => {

    try {

        const data = leadSchema.parse(req.body);

        const lead = await createLead(data);

        res.status(201).json(lead);

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

        const leads = await getLeads();

        res.json(leads);

    } catch (err: any) {

        res.status(400).json({
            message: err.message,
        });

    }

};

export const getOne = async (
    req: Request<{ id: string }>,
    res: Response
) => {

    try {

        const lead = await getLeadById(req.params.id);

        res.json(lead);

    } catch (err: any) {

        res.status(404).json({
            message: err.message,
        });

    }

};

export const update = async (
    req: Request<{ id: string }>,
    res: Response
) => {

    try {

        const data = leadSchema.parse(req.body);

        const lead = await updateLead(
            req.params.id,
            data
        );

        res.json(lead);

    } catch (err: any) {

        res.status(400).json({
            message: err.message,
        });

    }

};

export const remove = async (
    req: Request<{ id: string }>,
    res: Response
) => {

    try {

        const result = await deleteLead(req.params.id);

        res.json(result);

    } catch (err: any) {

        res.status(404).json({
            message: err.message,
        });

    }

};

export const changeStatus = async (
    req: Request<{ id: string }>,
    res: Response
) => {

    try {

        const lead = await updateLeadStatus(
            req.params.id,
            req.body.status
        );

        res.json(lead);

    } catch (err: any) {

        res.status(400).json({
            message: err.message,
        });

    }

};