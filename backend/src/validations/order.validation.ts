import { z } from "zod";

export const orderSchema = z.object({
    customerId: z.string(),

    items: z.array(
        z.object({
            productId: z.string(),
            quantity: z.number().positive(),
        })
    ),
});

export type OrderInput = z.infer<typeof orderSchema>;