import { Request, Response } from "express";

import {
  getUsers,
  createUser,
  updateUser,
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

export async function editUser(
  req: Request,
  res: Response
) {
  const user = await updateUser(
    req.params.id,
    req.body
  );

  res.json(user);
}