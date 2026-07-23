import { Request, Response } from "express";

import {
  getDashboardStats,
  getSalesReport,
  getProductReport,
  getCustomerReport,
} from "../services/report.service";

export const dashboard = async (
  _req: Request,
  res: Response
) => {
  res.json(await getDashboardStats());
};

export const sales = async (
  _req: Request,
  res: Response
) => {
  res.json(await getSalesReport());
};

export const products = async (
  _req: Request,
  res: Response
) => {
  res.json(await getProductReport());
};

export const customers = async (
  _req: Request,
  res: Response
) => {
  res.json(await getCustomerReport());
};