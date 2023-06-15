import { DeleteProductUseCaseRequest, DeleteProductUseCaseResponse } from '../../dtos/delete-product-dto';
import { ProductsRepository } from '../../repositories/product-repository';

export class DeleteProductUseCase {
  constructor(private productsRepository: ProductsRepository) { }

  async execute({ id }: DeleteProductUseCaseRequest): Promise<DeleteProductUseCaseResponse> {
    const product = await this.productsRepository.findById(id);

    if (!product) {
      throw new Error('Product not found.');
    }

    await this.productsRepository.delete(product);
    return {};
  }
}
