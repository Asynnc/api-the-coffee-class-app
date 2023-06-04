import { Entity } from '../../../../core/entities/entity';
import { UniqueEntityID } from '../../../../core/entities/unique-entity-id';

interface CategoryProps {
  name: string;
  icon: string
}

export class Category extends Entity<CategoryProps> {

  get name() {
    return this.props.name;
  }

  static create(props: CategoryProps, id?: UniqueEntityID) {
    const category = new Category(props, id);
    return category;
  }
}
