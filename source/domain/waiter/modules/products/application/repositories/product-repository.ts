import { Product } from '../../enterprise/entities/product';

export interface ProductsRepository {
  create(product: Product): Promise<void>;
  getAllProducts(): Promise<Product[] | null>;
}
