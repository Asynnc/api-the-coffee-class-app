import { ProductsRepository } from '../../modules/products/application/repositories/product-repository';
import { Product } from '../../modules/products/enterprise/entities/product';

export class InMemoryProductsRepository implements ProductsRepository {
  public items: Array<Product> = [];

  async create(product: Product) {
    this.items.push(product);
  }

  async getAllProducts(): Promise<Product[]> {
    return this.items;
  }
}
