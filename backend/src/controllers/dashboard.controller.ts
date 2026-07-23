import { Request, Response } from "express";

import {
  dashboardStats,
  revenueChart,
  orderStatusChart,
  recentOrders,
  recentCustomers,
} from "../services/dashboard.service";

export const getDashboard = async (
  _req: Request,
  res: Response
) => {

  res.json(await dashboardStats());

};

export const getRevenue = async (
  _req: Request,
  res: Response
) => {

  res.json(await revenueChart());

};

export const getOrderStatus = async (
  _req: Request,
  res: Response
) => {

  res.json(await orderStatusChart());

};

export const getRecentOrders = async (
  _req: Request,
  res: Response
) => {

  res.json(await recentOrders());

};

export const getRecentCustomers = async (
  _req: Request,
  res: Response
) => {

  res.json(await recentCustomers());

};