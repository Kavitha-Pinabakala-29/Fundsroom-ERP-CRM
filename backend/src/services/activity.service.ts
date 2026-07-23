import prisma from "../config/prisma";

export const getActivities = async () => {

    return await prisma.activityLog.findMany({

        include: {
            user: true,
        },

        orderBy: {
            createdAt: "desc",
        },

    });

};