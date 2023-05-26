import { Request, Response } from 'express';
import { ListProductService } from './ListProductService';

export class ListProductController {
  constructor(private listProductService: ListProductService) { }

  async handle(request: Request, response: Response) {

    const listProductService = new ListProductService;

    const result = await listProductService.execute();

    return response.json(result);
  }
}
