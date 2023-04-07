import { create, drop } from '../controller/user-controller';

const userRoutes = (app) => {
    app.post('/user', create);
    app.delete('/user', drop);
};

export default userRoutes;
