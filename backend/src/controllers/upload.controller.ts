import { Request, Response } from "express";

export const uploadImage = (
    req: Request,
    res: Response
) => {

    res.status(201).json({
        filename: req.file?.filename,
        path: `/uploads/${req.file?.filename}`,
    });

};