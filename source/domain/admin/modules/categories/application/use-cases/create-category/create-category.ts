import { Category } from '../../../enterprise/entities/category';
import { CreateCategoryRequest, CreateCategoryResponse } from '../../dtos/create-category-dto';
import { CategoriesRepository } from '../../repositories/category-repository';


export class CreateCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepository) { }

  async execute({ name, icon }: CreateCategoryRequest): Promise<CreateCategoryResponse> {
    const category = Category.create({ name, icon });

    await this.categoriesRepository.create(category);

    return { category };
  }
}
