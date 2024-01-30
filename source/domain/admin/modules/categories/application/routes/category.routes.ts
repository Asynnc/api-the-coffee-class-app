import { Request, Response, Router } from 'express';
import { container } from '../../../../../../core/shared/container';
import { CategoryController } from '../use-cases/create-category/create-category-controller';
import { GetAllCategoriesController } from '../use-cases/get-all-categories/get-all-categories-controller';

const categoriesRouter = Router();

const categoryController = container.get(CategoryController);
const getAllCategoriesController = container.get(GetAllCategoriesController);


categoriesRouter.post('/', (req: Request, res: Response) => categoryController.handle(req, res));
categoriesRouter.get('/', (req: Request, res: Response) => getAllCategoriesController.handle(req, res));


export { categoriesRouter };
