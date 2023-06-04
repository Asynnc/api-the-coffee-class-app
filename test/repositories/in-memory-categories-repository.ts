import { CategoriesRepository } from '../../source/domain/orders/application/repositories/category-repository';
import { Category } from '../../source/domain/orders/enterprises/entities/category';

export class InMemoryCategoriesRepository implements CategoriesRepository {
  public items: Array<Category> = [];

  async create(category: Category) {
    this.items.push(category);
  }
}
