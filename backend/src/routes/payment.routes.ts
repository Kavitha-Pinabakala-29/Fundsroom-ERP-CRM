import { Router } from "express";
import { create, getAll } from "../controllers/payment.controller";
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

export default router;