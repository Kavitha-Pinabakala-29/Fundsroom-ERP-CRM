import { z } from "zod";

export const invoiceSchema = z.object({
    orderId: z.string(),
});

export type InvoiceInput = z.infer<typeof invoiceSchema>;