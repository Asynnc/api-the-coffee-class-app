import { Entity } from '../../../../core/entities/entity';
import { UniqueEntityID } from '../../../../core/entities/unique-entity-id';
import { Ingredients } from './ingredients';


interface ProductProps {
  name: string;
  description: string;
  imagePath: string;
  price: number;
  ingredients: Array<Ingredients>
}

export class Product extends Entity<ProductProps> {

  get name() {
    return this.props.name;
  }

  get description() {
    return this.props.description;
  }

  get imagePath() {
    return this.props.imagePath;
  }

  get price() {
    return this.props.price;
  }

  get ingredients() {
    return this.props.ingredients;
  }


  static create(props: ProductProps, id?: UniqueEntityID) {
    const product = new Product(props, id);
    return product;
  }
}
