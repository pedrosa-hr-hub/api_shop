import {
    create,
    drop,
    update,
    getAll,
    getById,
} from '../controller/order-controller';

const orderRoutes = (app) => {
    app.post('/product', create);
    app.delete('/product', drop);
    app.get('/product', getAll);
    app.get('/productid', getById);
    app.put('/product', update);
};

export default orderRoutes;