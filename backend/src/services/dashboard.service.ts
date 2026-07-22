import prisma from "../config/prisma";

export const getDashboard = async () => {

    const totalCustomers = await prisma.customer.count();

    const totalLeads = await prisma.lead.count();

    const newLeads = await prisma.lead.count({
        where: {
            status: "NEW",
        },
    });

    const wonLeads = await prisma.lead.count({
        where: {
            status: "WON",
        },
    });

    return {
        totalCustomers,
        totalLeads,
        newLeads,
        wonLeads,
    };
};