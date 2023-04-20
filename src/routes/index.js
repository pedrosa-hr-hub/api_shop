import userRoutes from './user.routes';
import productRoutes from './product.routes';
import orderRoutes from './order.routes';

const routes = (app) => {
    userRoutes(app);
    productRoutes(app);
    orderRoutes(app);
};

export default routes;
