import api from "../api/axios";

import type { User } from "../types/userManagement";

export async function getUsers() {
  const res = await api.get<User[]>("/admin/users");
  return res.data;
}

export async function addUser(data: {
  name: string;
  email: string;
  password: string;
  role: string;
}) {
  const res = await api.post("/admin/users", data);
  return res.data;
}