import { Router } from "express";

import { authenticate } from "../middleware/auth.middleware";
import { getProfile } from "../controllers/user.controller";

import { authorize } from "../middleware/role.middleware";

const router = Router();

router.get(
    "/me",
    authenticate,
    authorize("ADMIN"),
    getProfile
);

export default router;