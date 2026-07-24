import { Router } from "express";

import {
  getAllUsers,
  addUser,
  editUser,
} from "../controllers/adminUser.controller";

import { authenticate } from "../middleware/auth.middleware";
import { authorize } from "../middleware/role.middleware";



const router = Router();

router.use(authenticate);

router.use(authorize("ADMIN"));

router.get("/", getAllUsers);

router.post("/", addUser);

router.put("/:id", editUser);

export default router;