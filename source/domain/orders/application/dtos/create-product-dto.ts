import { IngredientsProps } from '../../enterprise/entities/ingredient';
import { Product } from '../../enterprise/entities/product';

export interface CreateProductRequest {
  name: string;
  description: string;
  imagePath: string;
  price: number;
  ingredients: Array<IngredientsProps>;
  category: string
}

export interface CreateProductResponse {
  product: Product
}
