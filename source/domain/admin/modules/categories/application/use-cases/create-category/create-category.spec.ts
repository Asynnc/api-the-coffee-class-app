import { InMemoryCategoriesRepository } from '../../../../../test/repositories/in-memory-categories-repository';
import { CreateCategoryUseCase } from './create-category';

describe('Admin - Create Category', () => {
  let inMemoryCategoryRepository: InMemoryCategoriesRepository;
  let sut: CreateCategoryUseCase;

  beforeEach(() => {
    inMemoryCategoryRepository = new InMemoryCategoriesRepository();
    sut = new CreateCategoryUseCase(inMemoryCategoryRepository);
  });

  it('should be able to create a category', async () => {
    const { category } = await sut.execute({
      name: 'new-category',
      icon: '🆕',
    });

    expect(category.id).toBeTruthy();
    expect(category).toHaveProperty('id');
    expect(category).toHaveProperty('name');
    expect(category).toHaveProperty('icon');
    expect(inMemoryCategoryRepository.items[0].id).toEqual(category.id);
    expect(inMemoryCategoryRepository.items).toHaveLength(1);
  });
});
