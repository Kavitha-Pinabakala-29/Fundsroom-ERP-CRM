import { Request, Response } from "express";
import { productSchema } from "../validations/product.validation";
import {
    createProduct,
    getProducts,
} from "../services/product.service";

import {
    getProductById,
    updateProduct,
    deleteProduct,
    updateStock,
} from "../services/product.service";

export const create = async (
    req: Request,
    res: Response
) => {
    try {

        const data = productSchema.parse(req.body);

        const product = await createProduct(data);

        res.status(201).json(product);

    } catch (err: any) {

        res.status(400).json({
            message: err.message,
        });

    }
};

export const getAll = async (
    req: Request,
    res: Response
) => {

    const products = await getProducts();

    res.json(products);

};

export const getOne = async (req: Request<{ id: string }>, res: Response) => {

    const product = await getProductById(req.params.id);

    if (!product) {
        return res.status(404).json({
            message: "Product not found",
        });
    }

    res.json(product);

};

export const update = async (req: Request<{ id: string }>, res: Response) => {

    try {

        const data = productSchema.parse(req.body);

        const product = await updateProduct(
            req.params.id!,
            data
        );

        res.json(product);

    } catch (err: any) {

        res.status(400).json({
            message: err.message,
        });

    }

};

export const remove = async (req: Request<{ id: string }>, res: Response) => {

    const result = await deleteProduct(req.params.id);

    res.json(result);

};

export const stock = async (req: Request<{ id: string }>, res: Response) => {

    const product = await updateStock(
        req.params.id!,
        req.body.stock
    );

    res.json(product);

};