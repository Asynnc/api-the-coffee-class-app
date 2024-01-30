import { Category } from '../../modules/categories/enterprise/entities/category';
import { ICategoriesRepository } from '../../modules/categories/application/repositories/interfaces/category-repository';

export class InMemoryCategoriesRepository implements ICategoriesRepository {
  public items: Array<Category> = [];

  async create(category: Category) {
    this.items.push(category);
  }

  async getAllCategories(): Promise<Category[]> {
    return this.items;
  }
}
