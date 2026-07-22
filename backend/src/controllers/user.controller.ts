import { Response } from "express";
import { AuthRequest } from "../middleware/auth.middleware";

export const getProfile = (
    req: AuthRequest,
    res: Response
) => {

    res.json({
        message: "Authorized",
        user: req.user,
    });

};