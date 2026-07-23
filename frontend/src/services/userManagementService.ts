import api from "../api/axios";

import type { User } from "../types/userManagement";

export async function getUsers() {
  const res = await api.get<User[]>("/admin/users");

  return res.data;
}