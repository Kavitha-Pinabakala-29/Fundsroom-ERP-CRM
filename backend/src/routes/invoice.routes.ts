import { Router } from "express";
import {
  create,
  getAll,
  pay
} from "../controllers/invoice.controller";

import { authenticate } from "../middleware/auth.middleware";
import { authorize } from "../middleware/role.middleware";

const router = Router();

router.post("/", authenticate, authorize("ADMIN"), create);

router.get("/", authenticate, authorize("ADMIN"), getAll);

router.patch("/:id/pay", authenticate, authorize("ADMIN"), pay);

export default router;