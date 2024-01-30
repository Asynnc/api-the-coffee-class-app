import { Router } from 'express';
import { categoriesRouter } from '../../../modules/categories/application/routes/category.routes';

const adminRouter = Router();
adminRouter.use('/categories', categoriesRouter)
export { adminRouter };
