import {
    createUser,
    deleteUser,
    findAllUser,
    findbyIdUser,
    updateUser,
} from '../repositorys/user.repository';

const bcrypt = require('bcrypt');

export const create = async (req, res) => {
    try {
        const password = await req.body.password;
        const reqdata = await req.body;
        var salt = bcrypt.genSaltSync(8);
        var hash = bcrypt.hashSync(password, salt);

        reqdata.password = hash;

        await createUser(reqdata);

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
            await deleteUser(data);
        }
        res.status(202).json('Deleted!');
    } catch (e) {
        res.status(400).json(e);
    }
};

export const getAll = async (req, res) => {
    try {
        const dbdata = await findAllUser();
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
            const dbdata = await findbyIdUser(reqdata);
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
            const dbdata = await updateUser(reqdata);
            res.status(202).json(dbdata);
        }
    } catch (e) {
        res.status(400).json(e);
    }
};
