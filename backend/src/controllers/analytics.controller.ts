import { Request, Response } from "express";

import {

  revenueAnalytics,

  topProducts,

  customerGrowth,

  orderAnalytics,

} from "../services/analytics.service";

export async function getRevenue(

  _req: Request,

  res: Response

) {

  res.json(

    await revenueAnalytics()

  );

}

export async function getTopProducts(

  _req: Request,

  res: Response

) {

  res.json(

    await topProducts()

  );

}

export async function getCustomerGrowth(

  _req: Request,

  res: Response

) {

  res.json(

    await customerGrowth()

  );

}

export async function getOrders(

  _req: Request,

  res: Response

) {

  res.json(

    await orderAnalytics()

  );

}