import prisma from "../config/prisma";
import { LeadInput } from "../validations/lead.validation";

export const createLead = async (data: LeadInput) => {
    return await prisma.lead.create({
        data: {
            ...data,
            description: data.description ?? null,
            assignedTo: data.assignedTo ?? null,
        },
    });
};

export const getLeads = async () => {
    return await prisma.lead.findMany({
        include:{
            customer:true,
            salesUser:{
                select:{
                    id:true,
                    name:true,
                    email:true,
                    role:true
                }
            }
        },
        orderBy: {
            createdAt: "desc",
        },
    });
};

export const getLeadById = async (id: string) => {

    const lead = await prisma.lead.findUnique({
        where: { id },
        include: {
            customer: true,
            salesUser: true,
        },
    });

    if (!lead) {
        throw new Error("Lead not found");
    }

    return lead;
};

export const updateLead = async (
    id: string,
    data: LeadInput
) => {

    return await prisma.lead.update({
        where: { id },
        data: {
            ...data,
            description: data.description ?? null,
            assignedTo: data.assignedTo ?? null,
        },
    });

};

export const deleteLead = async (id: string) => {

    await prisma.lead.delete({
        where: { id },
    });

    return {
        message: "Lead deleted successfully",
    };

};
export const updateLeadStatus = async (
    id: string,
    status:
        | "NEW"
        | "CONTACTED"
        | "QUALIFIED"
        | "NEGOTIATION"
        | "WON"
        | "LOST"
) => {

    return await prisma.lead.update({

        where: {
            id,
        },

        data: {
            status,
        },

    });

};