import {
    createOrder,
    updateOrder,
    deleteOrder,
    findAllOrder,
    findbyIdOrder,
    createProductOrder,
} from '../repositorys/order.repository';

import { findbyIdProduct } from '../repositorys/product.repository';

export const create = async (req, res) => {
    try {
        const reqdata = await req.body;

        await createOrder(reqdata);

        res.status(201).json(reqdata);
    } catch (e) {
        res.status(400).json(e);
    }
};

export const drop = async (req, res) => {
    try {
        const reqdata = req.body.id;
        if (!reqdata.id) {
            res.status(400).json('No ID in request body');
        } else {
            await deleteOrder(data);
        }
        res.status(202).json('Deleted!');
    } catch (e) {
        res.status(400).json(e);
    }
};

export const getAll = async (req, res) => {
    try {
        const dbdata = await findAllOrder();
        res.status(200).json(dbdata);
    } catch (e) {
        res.status(400).json(e);
    }
};

export const getById = async (req, res) => {
    try {
        const reqdata = await req.body;
        if (!reqdata.id) {
            res.status(400).json('No ID in request body');
        } else {
            const dbdata = await findbyIdOrder(reqdata);
            res.status(200).json(dbdata);
        }
    } catch (e) {
        res.status(400).json(e);
    }
};

export const update = async (req, res) => {
    try {
        const reqdata = await req.body;
        if (!reqdata.id) {
            res.status(400).json('No ID in request body');
        } else {
            const dbdata = await updateOrder(reqdata);
            res.status(202).json(dbdata);
        }
    } catch (e) {
        res.status(400).json(e);
    }
};

export const createOrderProduct = async (req, res) => {
    try {
        const reqdata = await req.body;

        if (!reqdata.Orderid) {
            res.status(400).json('No Order ID in request body');
        } else {
            if (!reqdata.ProductId) {
                res.status(400).json('No Product ID in request body');
            } else {
                const productId = reqdata.ProductId;

                const dbdataProduct = findbyIdProduct(productId);

                reqdata.price = dbdataProduct.price * reqdata.quanty;

                const dbdata = await createProductOrder(reqdata);

                res.status(201).json(dbdata);
            }
        }
    } catch (e) {
        res.status(400).json(e);
    }
};
