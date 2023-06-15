
import { MakeProduct } from '../../../../../test/factory/make-product';
import { InMemoryProductsRepository } from '../../../../../test/repositories/in-memory-products-repository';
import { GetAllProductsUseCase } from './get-all-products';

let inMemoryQuestionsRepository: InMemoryProductsRepository;
let sut: GetAllProductsUseCase;

describe('Waiter - Get All Products', () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryProductsRepository();
    sut = new GetAllProductsUseCase(inMemoryQuestionsRepository);
  });

  it('should be able to get a all products', async () => {

    const newProduct = MakeProduct();
    const newProduct2 = MakeProduct();

    await inMemoryQuestionsRepository.create(newProduct);
    await inMemoryQuestionsRepository.create(newProduct2);

    const { products } = await sut.execute();

    expect(products).toEqual([newProduct, newProduct2]);
    expect(newProduct.id).toBeTruthy();
    expect(inMemoryQuestionsRepository.items).toHaveLength(2);
  });
});
