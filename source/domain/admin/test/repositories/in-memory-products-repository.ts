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

  async delete(question: Product) {
    const itemIdex = this.items.findIndex((item) => item.id === question.id);
    this.items.splice(itemIdex, 1);
  }
}
