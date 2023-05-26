import { Request, Response } from 'express';
import { ChangeOrderStatusService } from './changeOrderStatusService';

export class ChangeOrderStatusController {
  constructor(private changeOrderStatusService: ChangeOrderStatusService) { }

  async handle(request: Request, response: Response) {

    const { orderId } = request.params;
    const { status } = request.body;

    if (!['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status)) {
      response.status(400).send('Status should be one of these: WAITING, IN_PRODUCTION, DONE');
      return;
    }

    const changeOrderStatusService = new ChangeOrderStatusService;

    const result = await changeOrderStatusService.execute({ id: orderId, status });

    return response.json(result);
  }
}
