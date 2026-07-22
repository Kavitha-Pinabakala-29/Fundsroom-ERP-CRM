import prisma from "../config/prisma";

export const createActivity = async (
    action: string,
    entity: string,
    entityId: string,
    userId: string
) => {

    return await prisma.activityLog.create({
        data: {
            action,
            entity,
            entityId,
            userId,
        },
    });

};

export const getActivities = async () => {

    return await prisma.activityLog.findMany({
        include: {
            user: {
                select: {
                    id: true,
                    name: true,
                    email: true,
                    role: true,
                },
            },
        },
        orderBy: {
            createdAt: "desc",
        },
    });

};