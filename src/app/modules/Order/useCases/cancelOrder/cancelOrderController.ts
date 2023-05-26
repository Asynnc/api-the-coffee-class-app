import { Request, Response } from 'express';
import { CancelOrderService } from './cancelOrderService';

export class CancelOrderController {
  constructor(private CancelOrderService: CancelOrderService) { }

  async handle(request: Request, response: Response) {

    const { orderId } = request.params;

    const cancelOrderService = new CancelOrderService;

    await cancelOrderService.execute({ id: orderId });

    return response.json({ message: 'Order deleted.' });
  }
}
