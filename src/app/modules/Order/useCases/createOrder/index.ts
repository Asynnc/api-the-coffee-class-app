import { CreateOrderController } from './createOrderController';
import { CreateOrderService } from './createOrderService';

const createOrderService = new CreateOrderService();

const createOrderController = new CreateOrderController(
  createOrderService
);

export { createOrderController, createOrderService };
