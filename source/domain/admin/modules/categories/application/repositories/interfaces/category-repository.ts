import { Category } from '../../../enterprise/entities/category';

export const ICategoriesRepository = Symbol('ICategoriesRepository');
export interface ICategoriesRepository {
  create(category: Category): Promise<void>;
  getAllCategories(): Promise<Array<Category>>
  getAllCategories(): Promise<Category[] | null>;
  // update(category: Category): Promise<void>;
  // delete(category: Category): Promise<void>;
  // getAllCategories(): Promise<Category[] | null>;
}
