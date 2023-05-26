import { Category } from '../../../../core/shared/infra/database/mongodb/models/Category';

export class ListCategoryService {
  public async execute() {
    const categories = await Category.find();
    return categories || [];
  }
}
