import { Category } from '../../enterprises/entities/category';

export interface CategoriesRepository {
  create(category: Category): Promise<void>
}
