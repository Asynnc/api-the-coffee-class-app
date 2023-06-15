import { UniqueEntityID } from '../../../../../../../core/entities/unique-entity-id';
import { MakeProduct } from '../../../../../test/factory/make-product';
import { InMemoryProductsRepository } from '../../../../../test/repositories/in-memory-products-repository';
import { DeleteProductUseCase } from './delete-product';


let inMemoryProductsRepository: InMemoryProductsRepository;
let sut: DeleteProductUseCase;

describe('Admin - Delete Question', () => {
  beforeEach(() => {
    inMemoryProductsRepository = new InMemoryProductsRepository();
    sut = new DeleteProductUseCase(inMemoryProductsRepository);
  });

  it('should be able to delete a question', async () => {
    const newProduct = MakeProduct({}, new UniqueEntityID('product-1'));
    await inMemoryProductsRepository.create(newProduct);

    await sut.execute({
      id: newProduct.id.toString()
    });

    expect(inMemoryProductsRepository.items).toHaveLength(0);
  });

  it('should not be able to delete a question if not exists', async () => {
    const newProduct = MakeProduct({}, new UniqueEntityID('product-1'));
    await inMemoryProductsRepository.create(newProduct);

    expect(() => {
      return sut.execute({
        id: null
      });
    }).rejects.toBeInstanceOf(Error);
  });
});
