import { createUser } from '../repositorys/user.repository';

export const create = async (req, res) => {
    try {
        const user = await createUser(req.body);
        res.sendStatus(200, user);
    } catch (e) {
        res.sendStatus(400, e);
    }
};

export default create;
