
import { Entity } from '../../../../../../core/entities/entity';
import { UniqueEntityID } from '../../../../../../core/entities/unique-entity-id';
import { Optional } from '../../../../../../core/types/optional';
import { IngredientsProps } from './ingredient';
import dayjs from 'dayjs';


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

  private touch() {
    this.props.updatedAt = new Date();
  }

  get isNew(): boolean {
    return dayjs().diff(this.props.createdAt, 'days') <= 15;
  }

  get excerpt() {
    return this.description.substring(0, 60).trimEnd().concat('...');
  }

  get name() {
    return this.props.name;
  }

  set name(name: string) {
    this.props.name = name;
    this.touch();
  }

  get description() {
    return this.props.description;
  }

  set description(description: string) {
    this.props.description = description;
    this.touch();
  }

  get imagePath() {
    return this.props.imagePath;
  }

  set imagePath(imagePath: string) {
    this.props.imagePath = imagePath;
    this.touch();
  }

  get price() {
    return this.props.price;
  }

  set price(price: number) {
    this.props.price = price;
    this.touch();
  }

  get ingredients() {
    return this.props.ingredients;
  }

  set ingredients(ingredients: IngredientsProps[]) {
    this.props.ingredients = ingredients;
    this.touch();
  }

  get category() {
    return this.props.category;
  }

  set category(category: string) {
    this.props.category = category;
    this.touch();
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
