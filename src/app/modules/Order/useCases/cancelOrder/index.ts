import { CancelOrderController } from './cancelOrderController';
import { CancelOrderService } from './cancelOrderService';

const cancelOrderService = new CancelOrderService();

const cancelOrderController = new CancelOrderController(
  cancelOrderService
);

export { cancelOrderController, cancelOrderService };
