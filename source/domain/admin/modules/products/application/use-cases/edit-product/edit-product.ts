import { EditProductRequest, EditProductResponse } from '../../dtos/edit-product-dto';
import { ProductsRepository } from '../../repositories/product-repository';


export class EditProductuseCase {
  constructor(private productRepository: ProductsRepository) { }

  async execute({ productId, name, description, imagePath, price, ingredients, category }: EditProductRequest): Promise<EditProductResponse> {
    const product = await this.productRepository.findById(productId);

    if (!product) {
      throw new Error('Product not found.');
    }

    product.name = name;
    product.description = description;
    product.imagePath = imagePath;
    product.price = price;
    product.ingredients = ingredients;
    product.category = category;

    await this.productRepository.update(product);

    return {
      product
    };
  }
}
