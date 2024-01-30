import { ICategoriesRepository } from '../interfaces/category-repository';
import { prisma } from '../../../../../../../core/shared/infra/database/prisma';
import { injectable } from 'inversify';
import { Category } from '../../../enterprise/entities/category';

@injectable()
class CategoriesRepository implements ICategoriesRepository {
  async create(data: Category): Promise<void> {
    await prisma.categories.create({
      data: {
        name: data.name,
        icon: data.icon,
      },
    });
  }

  async getAllCategories(): Promise<Category[] | null> {
    const categories = await prisma.categories.findMany();

    if (categories.length === 0) return null

    return categories.map(categoryData => Category.create({
      name: categoryData.name,
      icon: categoryData.icon,
    }));
  }
}

export default CategoriesRepository;
