import { Order } from '../../../../core/shared/infra/database/mongodb/models/Order';
import { IChangeOrderStatus } from './changeOrderStatusDTO';

export class ChangeOrderStatusService {
  public async execute({ id, status }: IChangeOrderStatus) {
    const statusUpdated = await Order.findByIdAndUpdate(id, { status });
    return statusUpdated;
  }
}
