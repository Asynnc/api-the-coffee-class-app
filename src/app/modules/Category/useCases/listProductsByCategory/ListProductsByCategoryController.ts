import { Request, Response } from 'express';
import { ListProductsByCategoryService } from './ListProductsByCategoryService';

export class ListProductsByCategoryController {
  constructor(private listProductsByCategoryService: ListProductsByCategoryService) { }

  async handle(request: Request, response: Response) {

    const { categoryId } = request.params;

    const listCategoryService = new ListProductsByCategoryService;

    const result = await listCategoryService.execute({ id: categoryId });

    return response.json(result);
  }
}
