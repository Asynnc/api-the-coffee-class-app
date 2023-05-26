import { Product } from '../../../../core/shared/infra/database/mongodb/models/Product';
import { ICreateProduct } from './createProductDTO';

export class CreateProductService {
  public async execute({ name, description, image, price, category, ingredients }: ICreateProduct) {
    const product = await Product.create({
      name: name,
      description: description,
      imagePath: image,
      price: Number(price),
      category: category,
      ingredients: ingredients || []
    });

    return product;
  }
}
