import prisma from "../config/prisma";
import bcrypt from "bcryptjs";

export async function getUsers() {
  return prisma.user.findMany({
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,
    },
  });
}

export async function createUser(data: {
  name: string;
  email: string;
  password: string;
  role: "ADMIN" | "SALES" | "WAREHOUSE" | "ACCOUNTS";
}) {
  const hashed = await bcrypt.hash(data.password, 10);

  return prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: hashed,
      role: data.role,
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,
    },
  });
}

export async function updateUser(
  id: string,
  data: {
    name: string;
    email: string;
    role: "ADMIN" | "SALES" | "WAREHOUSE" | "ACCOUNTS";
  }
) {
  return prisma.user.update({
    where: {
      id,
    },
    data: {
      name: data.name,
      email: data.email,
      role: data.role,
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,
    },
  });
}