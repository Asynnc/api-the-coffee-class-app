import { GetAllProductsResponse } from '../../../dtos/product/get-all-products';
import { ProductsRepository } from '../../../repositories/product-repository';

export class GetAllProductsUseCase {
  constructor(private productsRepository: ProductsRepository) { }

  async execute(): Promise<GetAllProductsResponse> {
    const products = await this.productsRepository.getAllProducts();

    console.log(products);

    return {
      products,
    };
  }
}
