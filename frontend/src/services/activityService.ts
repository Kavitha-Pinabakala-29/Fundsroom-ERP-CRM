import api from "../api/axios";

import type { Activity } from "../types/activity";

export async function getActivities() {

  const res = await api.get<Activity[]>("/activity");

  return res.data;

}