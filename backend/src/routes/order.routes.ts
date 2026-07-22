import { Router } from "express";

import {
    create,
    getAll,
    getOne,
    update,
    remove,
} from "../controllers/order.controller";

import { authenticate } from "../middleware/auth.middleware";
import { authorize } from "../middleware/role.middleware";

import { updateStatus } from "../controllers/order.controller";

const router = Router();

router.post(
    "/",
    authenticate,
    authorize("ADMIN", "SALES"),
    create
);

router.get(
    "/",
    authenticate,
    authorize("ADMIN", "SALES"),
    getAll
);

router.get(
    "/:id",
    authenticate,
    authorize("ADMIN", "SALES"),
    getOne
);

router.patch(
    "/:id",
    authenticate,
    authorize("ADMIN", "SALES"),
    update
);

router.delete(
    "/:id",
    authenticate,
    authorize("ADMIN", "SALES"),
    remove
);

router.patch(
    "/:id/status",
    authenticate,
    authorize("ADMIN"),
    updateStatus
);

export default router;