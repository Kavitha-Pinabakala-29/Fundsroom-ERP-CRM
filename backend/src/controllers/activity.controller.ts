import { Request, Response } from "express";

import { getActivities } from "../services/activity.service";

export const getAll = async (

    _req: Request,

    res: Response

) => {

    const activities = await getActivities();

    res.json(activities);

};