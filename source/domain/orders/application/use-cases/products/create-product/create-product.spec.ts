import { InMemoryProductsRepository } from '../../../../../../../test/repositories/in-memory-products-repository';
import { CreateProductUseCase } from './create-product';

describe('Create Product', () => {
  let inMemoryProductsRepository: InMemoryProductsRepository;
  let sut: CreateProductUseCase;

  beforeEach(() => {
    inMemoryProductsRepository = new InMemoryProductsRepository();
    sut = new CreateProductUseCase(inMemoryProductsRepository);
  });

  it('should be able to create a product', async () => {

    const { product } = await sut.execute({
      name: 'new-product',
      description: 'new-product-description',
      imagePath: 'some-path',
      price: 0,
      category: 'category-id',
      ingredients: [{
        name: 'ingredient-name',
        icon: 'ingredient-icon',
      }]
    });

    expect(product.id).toBeTruthy();
    expect(product).toHaveProperty('id');
    expect(product).toHaveProperty('name');
    expect(product).toHaveProperty('description');
    expect(product).toHaveProperty('imagePath');
    expect(product).toHaveProperty('price');
    expect(product).toHaveProperty('category');
    expect(product).toHaveProperty('ingredients');

    expect(inMemoryProductsRepository.items[0].id).toEqual(product.id);
    expect(inMemoryProductsRepository.items).toHaveLength(1);
  });
});
