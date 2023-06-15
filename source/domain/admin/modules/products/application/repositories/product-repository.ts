import { Product } from '../../enterprise/entities/product';

export interface ProductsRepository {
  create(product: Product): Promise<void>;
  update(product: Product): Promise<void>;
  delete(product: Product): Promise<void>;
  findById(question: string): Promise<Product | null>
  getAllProducts(): Promise<Product[] | null>;
}
