import { ListProductsByCategoryController } from './ListProductsByCategoryController';
import { ListProductsByCategoryService } from './ListProductsByCategoryService';

const listProductsByCategoryService = new ListProductsByCategoryService();

const listProductsByCategoryController = new ListProductsByCategoryController(
  listProductsByCategoryService
);

export { listProductsByCategoryController, listProductsByCategoryService };
