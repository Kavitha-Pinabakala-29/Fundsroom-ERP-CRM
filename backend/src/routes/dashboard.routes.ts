import { Router } from "express";

import {
  getDashboard,
  getRevenue,
  getOrderStatus,
  getRecentOrders,
  getRecentCustomers,
} from "../controllers/dashboard.controller";

import { authenticate } from "../middleware/auth.middleware";
import { authorize } from "../middleware/role.middleware";

const router = Router();

router.get(
  "/",
  authenticate,
  authorize("ADMIN"),
  getDashboard
);

router.get(
  "/revenue",
  authenticate,
  authorize("ADMIN"),
  getRevenue
);

router.get(
  "/order-status",
  authenticate,
  authorize("ADMIN"),
  getOrderStatus
);

router.get(
  "/recent-orders",
  authenticate,
  authorize("ADMIN"),
  getRecentOrders
);

router.get(
  "/recent-customers",
  authenticate,
  authorize("ADMIN"),
  getRecentCustomers
);

export default router;