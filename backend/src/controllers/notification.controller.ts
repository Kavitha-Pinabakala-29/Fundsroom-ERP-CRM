import { Request, Response } from "express";

import { getNotifications } from "../services/notification.service";

export async function getAll(
  _req: Request,
  res: Response
) {
  res.json(await getNotifications());
}