import { Request, Response } from 'express';
import { CreateCategoryService } from './CreateCategoryService';

export class CreateCategoryController {
  constructor(private createCategoryService: CreateCategoryService) { }

  async handle(request: Request, response: Response) {

    const { name, icon } = request.body;

    const createCategoryService = new CreateCategoryService;

    const result = await createCategoryService.execute({ name, icon });

    return response.json(result);
  }
}
