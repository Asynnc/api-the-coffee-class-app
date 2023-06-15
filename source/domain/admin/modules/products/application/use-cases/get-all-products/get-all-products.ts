import { GetAllProductsResponse } from '../../dtos/get-all-products-dto';
import { ProductsRepository } from '../../repositories/product-repository';

export class GetAllProductsUseCase {
  constructor(private productsRepository: ProductsRepository) { }

  async execute(): Promise<GetAllProductsResponse> {
    const products = await this.productsRepository.getAllProducts();
    return {
      products,
    };
  }
}
