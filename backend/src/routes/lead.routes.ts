import { Router } from "express";

import {
    create,
    getAll,
    getOne,
    update,
    remove
} from "../controllers/lead.controller";

import { authenticate } from "../middleware/auth.middleware";
import { authorize } from "../middleware/role.middleware";

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

router.put(
    "/:id",
    authenticate,
    authorize("ADMIN", "SALES"),
    update
);

router.delete(
    "/:id",
    authenticate,
    authorize("ADMIN"),
    remove
);

router.get(
    "/:id",
    authenticate,
    authorize("ADMIN", "SALES"),
    getOne
);

router.put(
    "/:id",
    authenticate,
    authorize("ADMIN", "SALES"),
    update
);

router.delete(
    "/:id",
    authenticate,
    authorize("ADMIN"),
    remove
);
export default router;