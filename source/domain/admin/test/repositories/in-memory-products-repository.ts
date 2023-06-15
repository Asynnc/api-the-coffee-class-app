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

  async findById(id: string) {
    const product = this.items.find((item) => item.id.toString() === id);

    if (!product) {
      return null;
    }
    return product;
  }

  async delete(product: Product) {
    const itemIdex = this.items.findIndex((item) => item.id === product.id);
    this.items.splice(itemIdex, 1);
  }

  async update(product: Product) {
    const itemIdex = this.items.findIndex((item) => item.id === product.id);
    this.items[itemIdex] = product;
  }

}
