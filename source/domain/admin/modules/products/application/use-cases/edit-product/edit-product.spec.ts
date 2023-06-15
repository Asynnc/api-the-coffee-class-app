import { UniqueEntityID } from '../../../../../../../core/entities/unique-entity-id';
import { MakeProduct } from '../../../../../test/factory/make-product';
import { InMemoryProductsRepository } from '../../../../../test/repositories/in-memory-products-repository';
import { EditProductuseCase } from './edit-product';


let inMemoryProductsRepository: InMemoryProductsRepository;
let sut: EditProductuseCase;

describe('Edit Product', () => {
  beforeEach(() => {
    inMemoryProductsRepository = new InMemoryProductsRepository();
    sut = new EditProductuseCase(inMemoryProductsRepository);
  });

  it('should be able to edit a product', async () => {
    const newProduct = MakeProduct({}, new UniqueEntityID('product-id-1'));
    await inMemoryProductsRepository.create(newProduct);

    await sut.execute({
      productId: 'product-id-1',
      name: 'product-1',
      description: 'description-1',
      imagePath: 'image-path-url',
      price: 20.0,
      ingredients: [
        {
          name: 'ingredient-name',
          icon: 'ingredient-icon'
        }
      ],
      category: 'product-category',
    });

    expect(inMemoryProductsRepository.items[0]).toMatchObject({
      name: 'product-1',
      description: 'description-1',
    });
  });

  it('should not be able to edit a product from another user', async () => {
    const newProduct = MakeProduct({}, new UniqueEntityID('product-id-1'));
    await inMemoryProductsRepository.create(newProduct);

    expect(() => {
      return sut.execute({
        productId: 'product-id-2',
        name: 'product-1',
        description: 'description-1',
        imagePath: 'image-path-url',
        price: 20.0,
        ingredients: [
          {
            name: 'ingredient-name',
            icon: 'ingredient-icon'
          }
        ],
        category: 'product-category',
      });
    }).rejects.toBeInstanceOf(Error);
  });
});
