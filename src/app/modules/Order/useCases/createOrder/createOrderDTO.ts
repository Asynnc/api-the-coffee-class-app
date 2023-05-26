export interface ICreateOrder {
  table: string | number;
  products: Array<{
    product: string;
    quantity: number;
  }>
}
