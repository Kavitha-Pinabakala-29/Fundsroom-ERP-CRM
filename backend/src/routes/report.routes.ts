import { Router } from "express";

import {
  dashboard,
  sales,
  products,
  customers,
} from "../controllers/report.controller";

import { authenticate } from "../middleware/auth.middleware";

import { authorize } from "../middleware/role.middleware";

const router = Router();

router.get(
  "/dashboard",
  authenticate,
  authorize("ADMIN"),
  dashboard
);

router.get(
  "/sales",
  authenticate,
  authorize("ADMIN"),
  sales
);

router.get(
  "/products",
  authenticate,
  authorize("ADMIN"),
  products
);

router.get(
  "/customers",
  authenticate,
  authorize("ADMIN"),
  customers
);

export default router;