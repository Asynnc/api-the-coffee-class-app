import { MakeCategory } from '../../../../../../waiter/test/factory/make-categories';
import { InMemoryCategoriesRepository } from '../../../../../../waiter/test/repositories/in-memory-categories-repository';
import { GetAllCategoriesUseCase } from './get-all-categories';

let inMemoryCategoriesRepository: InMemoryCategoriesRepository;
let sut: GetAllCategoriesUseCase;

describe('Admin - Get All Categories', () => {
  beforeEach(() => {
    inMemoryCategoriesRepository = new InMemoryCategoriesRepository();
    sut = new GetAllCategoriesUseCase(inMemoryCategoriesRepository);
  });

  it('should be able to get a all categories', async () => {

    const newCategory = MakeCategory();
    const newCategory2 = MakeCategory();

    await inMemoryCategoriesRepository.create(newCategory);
    await inMemoryCategoriesRepository.create(newCategory2);

    const { categories } = await sut.execute();

    expect(categories).toEqual([newCategory, newCategory2]);
    expect(newCategory.id).toBeTruthy();
    expect(inMemoryCategoriesRepository.items).toHaveLength(2);
  });
});
