import { Request, Response } from "express";

import { getUsers } from "../services/adminUser.service";

export async function getAllUsers(
  _req: Request,
  res: Response
) {
  res.json(await getUsers());
}