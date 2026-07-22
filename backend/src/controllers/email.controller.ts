import { Request, Response } from "express";
import { sendEmail } from "../services/email.service";

export const send = async (
    req: Request,
    res: Response
) => {

    try {

        const { to, subject, text } = req.body;

        await sendEmail(to, subject, text);

        res.status(200).json({
            message: "Email sent successfully",
        });

    } catch (err: any) {

        res.status(400).json({
            message: err.message,
        });

    }

};