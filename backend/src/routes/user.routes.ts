import { Router } from "express";

import { authenticate } from "../middleware/auth.middleware";
import { getProfile } from "../controllers/user.controller";

const router = Router();

router.get(
    "/me",
    authenticate,
    getProfile
);

export default router;