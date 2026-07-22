import { Router } from "express";

import upload from "../middleware/upload.middleware";
import { uploadImage } from "../controllers/upload.controller";

import { authenticate } from "../middleware/auth.middleware";
import { authorize } from "../middleware/role.middleware";

const router = Router();

router.post(
    "/",
    authenticate,
    authorize("ADMIN"),
    upload.single("image"),
    uploadImage
);

export default router;