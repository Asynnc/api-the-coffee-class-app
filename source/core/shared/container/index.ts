import { Container } from 'inversify';

import { ICategoriesRepository } from '../../../domain/admin/modules/categories/application/repositories/interfaces/category-repository';
import CategoriesRepository from '../../../domain/admin/modules/categories/application/repositories/implementations/category-repository';
import { CreateCategoryUseCase } from '../../../domain/admin/modules/categories/application/use-cases/create-category/create-category';
import { CategoryController } from '../../../domain/admin/modules/categories/application/use-cases/create-category/create-category-controller';
import { InMemoryCategoriesRepository } from '../../../domain/admin/test/repositories/in-memory-categories-repository';
import { GetAllCategoriesUseCase } from '../../../domain/admin/modules/categories/application/use-cases/get-all-categories/get-all-categories';
import { GetAllCategoriesController } from '../../../domain/admin/modules/categories/application/use-cases/get-all-categories/get-all-categories-controller';

const container = new Container();

container
  .bind<ICategoriesRepository>(ICategoriesRepository)
  .to(CategoriesRepository);
container
  .bind<ICategoriesRepository>('ICategoriesRepository')
  .to(InMemoryCategoriesRepository);
container.bind<CreateCategoryUseCase>(CreateCategoryUseCase).toSelf();
container.bind<CategoryController>(CategoryController).toSelf();
container.bind<GetAllCategoriesUseCase>(GetAllCategoriesUseCase).toSelf();
container.bind<GetAllCategoriesController>(GetAllCategoriesController).toSelf();



export { container };
