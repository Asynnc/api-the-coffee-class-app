import { inject, injectable } from 'inversify';
import { Category } from '../../../enterprise/entities/category';
import {
  CreateCategoryRequest,
  CreateCategoryResponse,
} from '../../dtos/create-category-dto';
import { ICategoriesRepository } from '../../repositories/interfaces/category-repository';

@injectable()
export class CreateCategoryUseCase {
  private categoriesRepository: ICategoriesRepository;

  constructor(
    @inject(ICategoriesRepository) categoriesRepository: ICategoriesRepository
  ) {
    this.categoriesRepository = categoriesRepository;
  }

  async execute({
    name,
    icon,
  }: CreateCategoryRequest): Promise<CreateCategoryResponse> {
    const category = Category.create({ name, icon });
    await this.categoriesRepository.create(category);

    return { category };
  }
}
