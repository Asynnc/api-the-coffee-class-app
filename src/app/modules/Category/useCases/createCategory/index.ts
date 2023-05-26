import { CreateCategoryController } from './CreateCategoryController';
import { CreateCategoryService } from './CreateCategoryService';

const createCategoryService = new CreateCategoryService();

const createCategoryController = new CreateCategoryController(
  createCategoryService
);

export { createCategoryController, createCategoryService };
