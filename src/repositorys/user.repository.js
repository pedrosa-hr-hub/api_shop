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
            name: data.name,
            email: data.email,
            password: data.password,
            address_zip: data.address_zip,
            address_street: data.address_street,
            address_number: data.address_number,
            address_neighborhood: data.address_neighborhood,
            address_city: data.address_city,
            address_state: data.address_state,
            addrss_country: data.addrss_country,
            phone: data.phone,
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

export const findbyEmailUser = async (data) => {
    const user = await prisma.user.findUnique({
        where: {
            email: data.email,
        },
    });
    return user;
};
