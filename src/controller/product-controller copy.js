import {
    createProduct,
    updateProduct,
    deleteProduct,
    findAllProduct,
    findbyIdProduct,
} from '../repositorys/product.repository';

export const create = async (req, res) => {
    try {
        const reqdata = await req.body;

        await createProduct(reqdata);

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
            await deleteProduct(data);
        }
        res.status(202).json('Deleted!');
    } catch (e) {
        res.status(400).json(e);
    }
};

export const getAll = async (req, res) => {
    try {
        const dbdata = await findAllProduct();
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
            const dbdata = await findbyIdProduct(reqdata);
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
            const dbdata = await updateProduct(reqdata);
            res.status(202).json(dbdata);
        }
    } catch (e) {
        res.status(400).json(e);
    }
};
