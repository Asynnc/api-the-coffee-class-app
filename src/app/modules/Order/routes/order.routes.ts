import { Request, Response, Router } from 'express';
import { cancelOrderController } from '../useCases/cancelOrder';
import { changeOrderStatusController } from '../useCases/changeOrderStatus';
import { createOrderController } from '../useCases/createOrder';
import { listOrderController } from '../useCases/listOrder';

const ordersRouter = Router();

ordersRouter.post('/', (request: Request, response: Response) => {
  return createOrderController.handle(request, response);
});

ordersRouter.put('/:orderId', (request: Request, response: Response) => {
  return changeOrderStatusController.handle(request, response);
});

ordersRouter.delete('/:orderId', (request: Request, response: Response) => {
  return cancelOrderController.handle(request, response);
});

ordersRouter.get('/', (request: Request, response: Response) => {
  return listOrderController.handle(request, response);
});

export { ordersRouter };
