import bcrypt from "bcrypt";

import prisma from "../config/prisma";

import { generateToken } from "../utils/jwt";

export const registerUser = async (data: any) => {

    const existingUser =
        await prisma.user.findUnique({
            where: {
                email: data.email,
            },
        });

    if (existingUser) {
        throw new Error("Email already exists");
    }

    const hashedPassword =
        await bcrypt.hash(data.password, 10);

    const user =
        await prisma.user.create({
            data: {
                name: data.name,
                email: data.email,
                password: hashedPassword,
                role: data.role,
            },
        });

    return {
        message: "User created successfully",
        token: generateToken(user.id, user.role),
    };

};

export const loginUser = async (data: any) => {

    const user = await prisma.user.findUnique({
        where: {
            email: data.email,
        },
    });

    if (!user) {
        throw new Error("Invalid email or password");
    }

    const validPassword = await bcrypt.compare(
        data.password,
        user.password
    );

    if (!validPassword) {
        throw new Error("Invalid email or password");
    }

    return {
        message: "Login successful",
        token: generateToken(user.id, user.role),
    };
};