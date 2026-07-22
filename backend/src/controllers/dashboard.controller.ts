import { Request, Response } from "express";

import { getDashboard } from "../services/dashboard.service";

export const dashboard = async (
    req: Request,
    res: Response
) => {

    const data = await getDashboard();

    res.json(data);

};