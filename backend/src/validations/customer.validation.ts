import { z } from "zod";

export const customerSchema = z.object({
    name: z.string().min(2),
    email: z.email(),
    phone: z.string().min(10),
    company: z.string().min(2),
    address: z.string().min(5),
});

export type CustomerInput = z.infer<typeof customerSchema>;