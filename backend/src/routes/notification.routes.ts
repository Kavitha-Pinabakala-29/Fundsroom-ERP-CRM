import { Router } from "express";

import { getAll } from "../controllers/notification.controller";

import { authenticate } from "../middleware/auth.middleware";

const router = Router();

router.get(
  "/",
  authenticate,
  getAll
);

export default router;