import { inject, injectable } from 'inversify';
import {
  GetAllCategoriesResponse,
} from '../../dtos/get-all-categories';
import { ICategoriesRepository } from '../../repositories/interfaces/category-repository';

@injectable()
export class GetAllCategoriesUseCase {
  private categoriesRepository: ICategoriesRepository;

  constructor(
    @inject(ICategoriesRepository) categoriesRepository: ICategoriesRepository
  ) {
    this.categoriesRepository = categoriesRepository;
  }

  async execute(): Promise<GetAllCategoriesResponse> {
    const categories = await this.categoriesRepository.getAllCategories();
    return { categories };
  }
}
