import { Router } from "express";

import {
    create,
    getAll,
    getOne,
    remove,
} from "../controllers/payment.controller";

import { authenticate } from "../middleware/auth.middleware";
import { authorize } from "../middleware/role.middleware";

const router = Router();

router.post(
    "/",
    authenticate,
    authorize("ADMIN", "ACCOUNTS"),
    create
);

router.get(
    "/",
    authenticate,
    authorize("ADMIN", "ACCOUNTS"),
    getAll
);

router.get(
    "/:id",
    authenticate,
    authorize("ADMIN", "ACCOUNTS"),
    getOne
);

router.delete(
    "/:id",
    authenticate,
    authorize("ADMIN", "ACCOUNTS"),
    remove
);

export default router;