import { create, drop, getAll } from '../controller/user-controller';

const userRoutes = (app) => {
    app.post('/user', create);
    app.delete('/user', drop);
    app.get('/user', getAll);
};

export default userRoutes;
