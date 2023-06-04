import { Product } from '../../enterprises/entities/product';

export interface ProductsRepository {
  create(answer: Product): Promise<void>
}
