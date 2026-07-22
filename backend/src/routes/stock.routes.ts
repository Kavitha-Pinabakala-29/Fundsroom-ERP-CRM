import { Router } from "express";

import {
    stockInController,
    stockOutController,
    history,
} from "../controllers/stock.controller";

import { authenticate } from "../middleware/auth.middleware";
import { authorize } from "../middleware/role.middleware";

const router = Router();

router.post(
    "/in",
    authenticate,
    authorize("ADMIN", "WAREHOUSE"),
    stockInController
);

router.post(
    "/out",
    authenticate,
    authorize("ADMIN", "WAREHOUSE"),
    stockOutController
);

router.get(
    "/history/:productId",
    authenticate,
    authorize("ADMIN", "WAREHOUSE"),
    history
);

export default router;