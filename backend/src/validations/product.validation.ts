import { z } from "zod";

export const productSchema = z.object({
    name: z.string().min(2),
    sku: z.string().min(2),
    price: z.number().positive(),
    stock: z.number().int().nonnegative(),
});

export type ProductInput = z.infer<typeof productSchema>;