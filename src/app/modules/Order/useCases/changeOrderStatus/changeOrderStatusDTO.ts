export interface IChangeOrderStatus {
  id: string;
  status: 'WAITING' | 'IN_PRODUCTION' | 'DONE'
}
