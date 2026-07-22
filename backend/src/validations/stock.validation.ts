import { z } from "zod";

export const stockSchema = z.object({
    productId: z.string(),
    quantity: z.number().positive(),
});

export type StockInput = z.infer<typeof stockSchema>;