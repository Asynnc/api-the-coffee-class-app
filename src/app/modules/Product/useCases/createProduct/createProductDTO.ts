export interface ICreateProduct {
  name: string;
  description: string;
  image: string;
  price: number;
  ingredients: Array<IIgredients>;
  category: string;
}

export interface IIgredients {
  name: string;
  icon: string;
}
