import { Router } from "express";

import {

  getRevenue,

  getTopProducts,

  getCustomerGrowth,

  getOrders,

} from "../controllers/analytics.controller";

import { authenticate } from "../middleware/auth.middleware";

const router = Router();

router.get(

  "/revenue",

  authenticate,

  getRevenue

);

router.get(

  "/products",

  authenticate,

  getTopProducts

);

router.get(

  "/customers",

  authenticate,

  getCustomerGrowth

);

router.get(

  "/orders",

  authenticate,

  getOrders

);

export default router;