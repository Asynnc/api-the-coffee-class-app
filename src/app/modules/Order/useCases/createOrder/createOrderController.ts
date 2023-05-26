import { Request, Response } from 'express';
import { CreateOrderService } from './createOrderService';

export class CreateOrderController {
  constructor(private createOrderService: CreateOrderService) { }

  async handle(request: Request, response: Response) {

    const { table, products } = request.body;

    const createOrderService = new CreateOrderService;

    const result = await createOrderService.execute({ table, products });

    return response.json(result);
  }
}
