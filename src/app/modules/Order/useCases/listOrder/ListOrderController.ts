import { Request, Response } from 'express';
import { ListOrderService } from './ListOrderService';

export class ListOrderController {
  constructor(private listOrderService: ListOrderService) { }

  async handle(request: Request, response: Response) {

    const listOrderService = new ListOrderService;

    const result = await listOrderService.execute();

    return response.json(result);
  }
}
