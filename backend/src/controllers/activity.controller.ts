import { Request, Response } from "express";

import {
    createActivity,
    getActivities,
} from "../services/activity.service";

export const create = async (
    req: Request,
    res: Response
) => {

    try {

        const { action, entity, entityId } = req.body;

        const activity = await createActivity(
            action,
            entity,
            entityId,
            (req as any).user.id
        );

        res.status(201).json(activity);

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

    const activities = await getActivities();

    res.json(activities);

};