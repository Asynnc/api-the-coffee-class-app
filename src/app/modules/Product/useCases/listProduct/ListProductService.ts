import { Product } from '../../../../core/shared/infra/database/mongodb/models/Product';

export class ListProductService {
  public async execute() {
    const products = await Product.find();
    return products || [];
  }
}
