import { ProductsRepository } from '../../source/domain/orders/application/repositories/product-repository';
import { Product } from '../../source/domain/orders/enterprise/entities/product';

export class InMemoryProductsRepository implements ProductsRepository {
  public items: Array<Product> = [];

  async create(product: Product) {
    this.items.push(product);
  }

  async getAllProducts(): Promise<Product[]> {
    return this.items;
  }
}
