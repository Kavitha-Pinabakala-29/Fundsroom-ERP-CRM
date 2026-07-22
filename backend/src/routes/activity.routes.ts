import { Router } from "express";

import {
    create,
    getAll,
} from "../controllers/activity.controller";

import { authenticate } from "../middleware/auth.middleware";
import { authorize } from "../middleware/role.middleware";

const router = Router();

router.post(
    "/",
    authenticate,
    authorize("ADMIN"),
    create
);

router.get(
    "/",
    authenticate,
    authorize("ADMIN"),
    getAll
);

export default router;