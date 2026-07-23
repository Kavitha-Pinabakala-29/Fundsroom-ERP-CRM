import { z } from "zod";


export const leadSchema = z.object({

    title: z.string().min(3),

    description: z.string().optional(),

    customerId: z.string().cuid(),

    assignedTo: z.string().cuid().optional(),

});


export const leadStatusSchema = z.object({

    status: z.enum([
        "NEW",
        "CONTACTED",
        "QUALIFIED",
        "NEGOTIATION",
        "WON",
        "LOST",
    ]),

});


export type LeadInput =
    z.infer<typeof leadSchema>;


export type LeadStatusInput =
    z.infer<typeof leadStatusSchema>;