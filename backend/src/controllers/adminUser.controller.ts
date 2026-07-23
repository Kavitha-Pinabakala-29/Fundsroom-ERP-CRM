import { Request, Response } from "express";

import {
  getUsers,
  createUser,
} from "../services/adminUser.service";

export async function getAllUsers(
  _req: Request,
  res: Response
) {
  res.json(await getUsers());
}

export async function addUser(
  req: Request,
  res: Response
) {
  const user = await createUser(req.body);

  res.status(201).json(user);
}