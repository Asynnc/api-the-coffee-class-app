import { ListCategoryController } from './ListCategoryController';
import { ListCategoryService } from './ListCategoryService';

const listCategoryService = new ListCategoryService();

const listCategoryController = new ListCategoryController(
  listCategoryService
);

export { listCategoryController, listCategoryService };
