import { io } from '../../../../core/shared/http/server';
import { Order } from '../../../../core/shared/infra/database/mongodb/models/Order';
import { ICreateOrder } from './createOrderDTO';

export class CreateOrderService {
  public async execute({ table, products }: ICreateOrder) {

    const order = await Order.create({
      table: table,
      products: products,
    });

    const orderDetails = await order.populate('products.product');
    io.emit('orders@new', orderDetails);

    return order;
  }
}
