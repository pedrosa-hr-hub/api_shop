import {
    create,
    drop,
    update,
    getAll,
    getById,
} from '../controller/order-controller';

const orderRoutes = (app) => {
    app.post('/order', create);
    app.delete('/order', drop);
    app.get('/order', getAll);
    app.get('/orderid', getById);
    app.put('/order', update);
};

export default orderRoutes;
