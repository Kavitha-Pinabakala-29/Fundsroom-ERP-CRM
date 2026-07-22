import { Router } from "express";

import {
    salesReport,
    inventoryReport,
} from "../controllers/report.controller";

import { authenticate } from "../middleware/auth.middleware";
import { authorize } from "../middleware/role.middleware";

const router = Router();

router.get(
    "/sales",
    authenticate,
    authorize("ADMIN", "ACCOUNTS"),
    salesReport
);

router.get(
    "/inventory",
    authenticate,
    authorize("ADMIN", "ACCOUNTS"),
    inventoryReport
);

export default router;