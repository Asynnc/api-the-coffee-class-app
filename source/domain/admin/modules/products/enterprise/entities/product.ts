
import { Entity } from '../../../../../../core/entities/entity';
import { UniqueEntityID } from '../../../../../../core/entities/unique-entity-id';
import { Optional } from '../../../../../../core/types/optional';
import { IngredientsProps } from './ingredient';

export interface ProductProps {
  name: string;
  description: string;
  imagePath: string;
  price: number;
  ingredients: Array<IngredientsProps>
  category: string
  createdAt: Date;
  updatedAt: Date;
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

  static create(props: Optional<ProductProps, 'createdAt' | 'updatedAt'>, id?: UniqueEntityID) {
    const product = new Product({
      ...props,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, id);

    return product;
  }
}
