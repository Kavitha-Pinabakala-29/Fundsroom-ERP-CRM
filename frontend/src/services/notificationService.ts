import api from "../api/axios";

import type { Notification } from "../types/notification";

export async function getNotifications() {

  const res = await api.get<Notification[]>("/notifications");

  return res.data;

}