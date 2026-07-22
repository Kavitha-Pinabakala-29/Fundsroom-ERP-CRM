import prisma from "../config/prisma";

export const getDashboard = async () => {

    const totalCustomers = await prisma.customer.count();

    const totalLeads = await prisma.lead.count();

    const newLeads = await prisma.lead.count({
        where: {
            status: "NEW",
        },
    });

    const contactedLeads = await prisma.lead.count({
        where: {
            status: "CONTACTED",
        },
    });

    const qualifiedLeads = await prisma.lead.count({
        where: {
            status: "QUALIFIED",
        },
    });

    const negotiationLeads = await prisma.lead.count({
        where: {
            status: "NEGOTIATION",
        },
    });

    const wonLeads = await prisma.lead.count({
        where: {
            status: "WON",
        },
    });

    const lostLeads = await prisma.lead.count({
        where: {
            status: "LOST",
        },
    });

    return {
        totalCustomers,
        totalLeads,
        newLeads,
        contactedLeads,
        qualifiedLeads,
        negotiationLeads,
        wonLeads,
        lostLeads,
    };

};