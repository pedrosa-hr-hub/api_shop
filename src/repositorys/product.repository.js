import { prisma } from '../services/prisma';

export const createProduct = async (data) => {
    const product = await prisma.product.create({
        data,
    });
    return product;
};

export const updateProduct = async (data) => {
    const product = await prisma.product.update({
        where: {
            id: data.id,
        },
        data: {
            name: data.name,
            description: data.description,
            price: data.price,
            idUser: data.userId,
        },
    });
    return product;
};

export const deleteProduct = async (data) => {
    const product = await prisma.product.delete({
        where: {
            id: data.id,
        },
    });
    return product;
};

export const findAllProduct = async () => {
    const product = await prisma.product.findMany();
    return product;
};

export const findbyIdProduct = async (data) => {
    const product = await prisma.product.findUnique({
        where: {
            id: data.id,
        },
    });
    return product;
};
