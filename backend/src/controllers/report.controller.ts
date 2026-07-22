import { Request, Response } from "express";

import {
    getSalesReport,
    getInventoryReport,
} from "../services/report.service";

export const salesReport = async (
    req: Request,
    res: Response
) => {

    const report = await getSalesReport();

    res.json(report);

};

export const inventoryReport = async (
    req: Request,
    res: Response
) => {

    const report = await getInventoryReport();

    res.json(report);

};