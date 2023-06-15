import { Category } from '../../enterprise/entities/category';

export interface CategoriesRepository {
  create(category: Category): Promise<void>
}
