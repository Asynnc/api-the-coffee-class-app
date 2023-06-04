import { Category } from '../../../enterprise/entities/category';

export interface CreateCategoryRequest {
  icon: string,
  name: string
}

export interface CreateCategoryResponse {
  category: Category
}
