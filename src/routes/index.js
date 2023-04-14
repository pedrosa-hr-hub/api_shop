import userRoutes from './user.routes';
import productRoutes from './product.routes';

const routes = (app) => {
    userRoutes(app);
    productRoutes(app);
};

export default routes;
