import { Entity } from '../../../../core/entities/entity';
import { UniqueEntityID } from '../../../../core/entities/unique-entity-id';

interface IngredientsProps {
  name: string;
  icon: string;
}

export class Ingredients extends Entity<IngredientsProps> {

  get name() {
    return this.props.name;
  }

  static create(props: IngredientsProps, id?: UniqueEntityID) {
    const ingredients = new Ingredients(props, id);
    return ingredients;
  }
}
