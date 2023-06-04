import { Entity } from '../../../../core/entities/entity';
import { UniqueEntityID } from '../../../../core/entities/unique-entity-id';
import { IngredientsProps } from './ingredient';

export interface ProductProps {
  name: string;
  description: string;
  imagePath: string;
  price: number;
  ingredients: Array<IngredientsProps>
  category: string
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

  get category() {
    return this.props.category;
  }

  static create(props: ProductProps, id?: UniqueEntityID) {

    const propertiesToCheck = ['name', 'description', 'imagePath', 'price', 'ingredients', 'category'];

    for (const property of propertiesToCheck) {
      if (!(property in props)) {
        throw new Error(`Missing param: ${property}`);
      }
    }

    const product = new Product(props, id);
    return product;
  }
}
