import { z } from "zod";

export const paymentSchema = z.object({
  invoiceId: z.string().min(1),
  method: z.enum(["CASH", "CARD", "UPI", "BANK"]),
  amount: z.number().positive(),
  transactionId: z.string().min(1),
});

export type PaymentInput = z.infer<typeof paymentSchema>;