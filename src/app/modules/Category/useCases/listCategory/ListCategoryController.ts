import { Request, Response } from 'express';
import { ListCategoryService } from './ListCategoryService';

export class ListCategoryController {
  constructor(private listCategoryService: ListCategoryService) { }

  async handle(request: Request, response: Response) {

    const listCategoryService = new ListCategoryService;

    const result = await listCategoryService.execute();

    return response.json(result);
  }
}
