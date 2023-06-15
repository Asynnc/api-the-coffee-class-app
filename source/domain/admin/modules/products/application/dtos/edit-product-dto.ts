import { IngredientsProps } from '../../enterprise/entities/ingredient';
import { Product } from '../../enterprise/entities/product';

export interface EditProductRequest {
  productId: string;
  name: string;
  description: string;
  imagePath: string;
  price: number;
  ingredients: Array<IngredientsProps>;
  category: string
}

export interface EditProductResponse {
  product: Product;
}
