import { CreateCategoryRequest, CreateCategoryResponse } from '../../../dtos/category/create-category-dto';
import { CategoriesRepository } from '../../../repositories/category-repository';
import { Category } from '../../../../enterprise/entities/category';

export class CreateCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepository) { }

  async execute({ name, icon }: CreateCategoryRequest): Promise<CreateCategoryResponse> {
    const category = Category.create({ name, icon });

    await this.categoriesRepository.create(category);

    return { category };
  }
}
