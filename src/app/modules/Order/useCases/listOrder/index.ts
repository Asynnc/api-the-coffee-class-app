import { ListOrderController } from './ListOrderController';
import { ListOrderService } from './ListOrderService';

const listOrderService = new ListOrderService();

const listOrderController = new ListOrderController(
  listOrderService
);

export { listOrderController, listOrderService };
