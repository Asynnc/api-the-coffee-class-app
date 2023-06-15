import { Product } from '../../../enterprise/entities/product';
import { CreateProductRequest, CreateProductResponse } from '../../dtos/create-product-dto';
import { ProductsRepository } from '../../repositories/product-repository';

export class CreateProductUseCase {
  constructor(private productsRepository: ProductsRepository) { }

  async execute({ name, description, imagePath, price, ingredients, category }: CreateProductRequest): Promise<CreateProductResponse> {

    const product = Product.create({ name, description, imagePath, price, ingredients, category });
    await this.productsRepository.create(product);

    return { product };
  }
}
