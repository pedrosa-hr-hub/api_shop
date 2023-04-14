import {
    create,
    drop,
    update,
    getAll,
    getById,
} from '../controller/product-controller';

const productRoutes = (app) => {
    app.post('/product', create);
    app.delete('/product', drop);
    app.get('/product', getAll);
    app.get('/productid', getById);
    app.put('/product', update);
};
