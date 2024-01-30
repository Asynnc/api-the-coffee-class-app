import { Request, Response } from 'express';
import { injectable, inject } from 'inversify';
import { CreateCategoryUseCase } from './create-category';

@injectable()
export class CategoryController {
  constructor(
    @inject(CreateCategoryUseCase)
    private createCategoryUseCase: CreateCategoryUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, icon } = request.body;

    const result = await this.createCategoryUseCase.execute({ name, icon });

    return response.status(201).json(result);
  }
}
