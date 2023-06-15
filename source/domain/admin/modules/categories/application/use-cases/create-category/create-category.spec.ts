import { InMemoryCategoriesRepository } from '../../../../../test/repositories/in-memory-categories-repository';
import { CreateCategoryUseCase } from './create-category';


describe('Admin - Create Category', () => {
  let inMemoryQuestionsRepository: InMemoryCategoriesRepository;
  let sut: CreateCategoryUseCase;

  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryCategoriesRepository();
    sut = new CreateCategoryUseCase(inMemoryQuestionsRepository);
  });

  it('should be able to create a category', async () => {
    const { category } = await sut.execute({
      name: 'new-category',
      icon: '🆕'
    });

    expect(category.id).toBeTruthy();
    expect(category).toHaveProperty('id');
    expect(category).toHaveProperty('name');
    expect(category).toHaveProperty('icon');
    expect(inMemoryQuestionsRepository.items[0].id).toEqual(category.id);
    expect(inMemoryQuestionsRepository.items).toHaveLength(1);
  });
});
