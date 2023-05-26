import { Router } from 'express';
import { authRouter } from '../../../../modules/Auth/routes/auth.routes';
import { categoryRouter } from '../../../../modules/Category/routes/category.routes';
import { feedbacksRouter } from '../../../../modules/Feedback/routes/feedback.routes';
import { ordersRouter } from '../../../../modules/Order/routes/order.routes';
import { productsRouter } from '../../../../modules/Product/routes/product.routes';
import { usersRouter } from '../../../../modules/User/routes/users.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/auth', authRouter);
routes.use('/orders', ordersRouter);
routes.use('/products', productsRouter);
routes.use('/categories', categoryRouter);
routes.use('/feedbacks', feedbacksRouter);

export { routes };
