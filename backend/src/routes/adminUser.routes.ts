import { Router } from "express";

import { getAllUsers } from "../controllers/adminUser.controller";

import { authenticate } from "../middleware/auth.middleware";
import { authorize } from "../middleware/role.middleware";

const router = Router();

router.get(
  "/",
  authenticate,
  authorize("ADMIN"),
  getAllUsers
);

export default router;