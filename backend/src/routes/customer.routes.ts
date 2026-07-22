import { Router } from "express";

import {
    create,
    getAll,
    getById,
    update,
    remove,
} from "../controllers/customer.controller";
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
    authorize("ADMIN", "SALES", "ACCOUNTS"),
    getAll
);

router.get(
    "/:id",
    authenticate,
    authorize("ADMIN", "SALES", "ACCOUNTS"),
    getById
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