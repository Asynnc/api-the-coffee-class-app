import { Order } from '../../../../core/shared/infra/database/mongodb/models/Order';

export class ListOrderService {
  public async execute() {

    const orders = await Order.find()
      .sort({ createdAt: 1 })
      .populate('products.product');

    return orders || [];
  }
}
