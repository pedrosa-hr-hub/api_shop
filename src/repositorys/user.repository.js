import { prisma } from '../services/prisma';

export const createUser = async (data) => {
    const user = await prisma.user.create({
        data,
    });
    return user;
};

export const updateUser = async (data) => {
    const user = await prisma.user.update({
        where: {
            id: data.id,
        },
        data: {
            data,
        },
    });
    return user;
};

export const deleteUser = async (data) => {
    const user = await prisma.user.delete({
        where: {
            id: data.id,
        },
    });
    return user;
};

export const findAllUser = async (data) => {
    const user = await prisma.user.findMany();
    return user;
};

export const findbyIdUser = async (data) => {
    const user = await prisma.user.findUnique({
        where: {
            id: data.id,
        },
    });
    return user;
};
