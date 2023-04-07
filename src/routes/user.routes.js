import { create } from '../controller/user-controller';

const userRoutes = (app) => {
    app.post('/user', create);
};

export default userRoutes;
