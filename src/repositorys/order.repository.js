import { prisma } from '../services/prisma';

export const createOrder = async (data) => {
    const order = await prisma.order.create({
        data,
    });
    return order;
};

export const updateOrder = async (data) => {
    const order = await prisma.order.update({
        where: {
            id: data.id,
        },
        data: {
            idUser: data.idUser,
            idProduct: data.idProduct,
        },
    });
    return order;
};

export const deleteOrder = async (data) => {
    const order = await prisma.order.delete({
        where: {
            id: data.id,
        },
    });
    return order;
};

export const findAllOrder = async () => {
    const order = await prisma.order.findMany();
    return order;
};

export const findbyIdOrder = async (data) => {
    const order = await prisma.order.findUnique({
        where: {
            id: data.id,
        },
    });
    return order;
};

export const createProductOrder = async (data) => {
    const OrderProduct = await prisma.product.create({
        data,
    });

    return OrderProduct;
}
