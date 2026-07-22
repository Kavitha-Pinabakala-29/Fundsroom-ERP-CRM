import { Router } from "express";

import {
    create,
    getAll,
    getOne,
    update,
    remove,
    stock,
} from "../controllers/product.controller";

import { authenticate } from "../middleware/auth.middleware";
import { authorize } from "../middleware/role.middleware";

const router = Router();

router.post("/", authenticate, authorize("ADMIN"), create);

router.get("/", authenticate, getAll);

router.get("/:id", authenticate, getOne);

router.put("/:id", authenticate, authorize("ADMIN"), update);

router.patch("/:id/stock", authenticate, authorize("ADMIN"), stock);

router.delete("/:id", authenticate, authorize("ADMIN"), remove);

export default router;