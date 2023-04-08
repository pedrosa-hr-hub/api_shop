import {
    create,
    drop,
    getAll,
    getById,
    update,
} from '../controller/user-controller';

const userRoutes = (app) => {
    app.post('/user', create);
    app.delete('/user', drop);
    app.get('/user', getAll);
    app.get('/userid', getById);
    app.put('/user', update);
};

export default userRoutes;
