import { ListProductController } from './ListProductController';
import { ListProductService } from './ListProductService';

const listProductService = new ListProductService();

const listProductController = new ListProductController(
  listProductService
);

export { listProductController, listProductService };
