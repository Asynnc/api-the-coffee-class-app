import { CreateProductController } from './createProductController';
import { CreateProductService } from './createProductService';

const createProductService = new CreateProductService();

const createProductController = new CreateProductController(
  createProductService
);

export { createProductController, createProductService };
