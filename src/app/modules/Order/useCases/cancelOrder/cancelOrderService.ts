import { Order } from '../../../../core/shared/infra/database/mongodb/models/Order';
import { ICancelOrder } from './chancelOrderDTO';

export class CancelOrderService {
  public async execute({ id }: ICancelOrder) {
    await Order.findByIdAndDelete(id);
  }
}
