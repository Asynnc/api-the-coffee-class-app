import { ChangeOrderStatusController } from './changeOrderStatusController';
import { ChangeOrderStatusService } from './changeOrderStatusService';

const changeOrderStatusService = new ChangeOrderStatusService();

const changeOrderStatusController = new ChangeOrderStatusController(
  changeOrderStatusService
);

export { changeOrderStatusController, changeOrderStatusService };
