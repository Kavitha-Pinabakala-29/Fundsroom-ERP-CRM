import { Request, Response } from "express";
import { registerSchema } from "../validations/auth.validation";
import { registerUser } from "../services/auth.service";
import { loginSchema } from "../validations/auth.validation";
import { loginUser } from "../services/auth.service";

export const register = async (
    req: Request,
    res: Response
) => {

    try {

        const data =
            registerSchema.parse(req.body);

        const result =
            await registerUser(data);

        res.status(201).json(result);

    } catch (err: any) {

        res.status(400).json({
            message: err.message,
        });

    }

};

export const login = async (
    req: Request,
    res: Response
) => {

    try {

        const data = loginSchema.parse(req.body);

        const result = await loginUser(data);

        res.json(result);

    } catch (err: any) {

        res.status(400).json({
            message: err.message,
        });

    }

};