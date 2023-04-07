import {
    createUser,
    deleteUser,
    findAllUser,
} from '../repositorys/user.repository';

export const create = async (req, res) => {
    try {
        const user = await createUser(req.body);
        res.status(201).json(user);
    } catch (e) {
        res.status(400).json(e);
    }
};

export const drop = async (req, res) => {
    try {
        await deleteUser(req.body);
        res.status(202).json('Deleted!');
    } catch (e) {
        res.status(400).json(e);
    }
};

export const getAll = async (req, res) => {
    try {
        const data = await findAllUser();
        res.status(200).json(data);
    } catch (e) {
        res.status(400).json(e);
    }
};
