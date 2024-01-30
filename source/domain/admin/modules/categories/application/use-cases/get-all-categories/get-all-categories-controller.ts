import { Response, Request } from 'express';
import { injectable, inject } from 'inversify';
import { GetAllCategoriesUseCase } from './get-all-categories';

@injectable()
export class GetAllCategoriesController {
  constructor(
    @inject(GetAllCategoriesUseCase)
    private getAllCategoriesUseCase: GetAllCategoriesUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const result = await this.getAllCategoriesUseCase.execute();
    return response.status(200).json(result);
  }
}
