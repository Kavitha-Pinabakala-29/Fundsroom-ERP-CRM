import { Router } from "express";

import { send } from "../controllers/email.controller";

import { authenticate } from "../middleware/auth.middleware";
import { authorize } from "../middleware/role.middleware";

const router = Router();

router.post(
    "/",
    authenticate,
    authorize("ADMIN"),
    send
);

export default router;