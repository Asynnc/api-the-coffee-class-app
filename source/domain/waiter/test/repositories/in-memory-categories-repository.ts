import { CategoriesRepository } from '../../modules/categories/application/repositories/category-repository';
import { Category } from '../../modules/categories/enterprise/entities/category';


export class InMemoryCategoriesRepository implements CategoriesRepository {
  public items: Array<Category> = [];

  async create(category: Category) {
    this.items.push(category);
  }
}
