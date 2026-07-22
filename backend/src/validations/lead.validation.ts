import { z } from "zod";

export const leadSchema = z.object({
    title: z.string().min(3),
    description: z.string().optional(),
    customerId: z.string(),
    assignedTo: z.string().optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;