import { AppError } from '../../../../core/shared/http/errors';
import { Category } from '../../../../core/shared/infra/database/mongodb/models/Category';
import { ICreateCategory } from './CreateCategoryDTO';

export class CreateCategoryService {
  public async execute({ icon, name }: ICreateCategory) {

    const categoryAlreadyExists = await Category.findOne({ name });

    if (categoryAlreadyExists) {
      throw new AppError('This category already exists.', 400);
    }

    const category = await Category.create({
      name,
      icon
    });

    return category;
  }
}
