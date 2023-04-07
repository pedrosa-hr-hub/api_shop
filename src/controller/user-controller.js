import { createUser, deleteUser } from '../repositorys/user.repository';

export const create = async (req, res) => {
    try {
        const user = await createUser(req.body);
        res.status(200).json(user);
    } catch (e) {
        res.status(400);
    }
};

export const drop = async (req, res) => {
    try {
        await deleteUser(req.body);
        res.status(202).json('Deleted!');
    } catch (e) {
        res.status(400);
    }
};
