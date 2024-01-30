import { faker } from '@faker-js/faker';
import { UniqueEntityID } from '../../../../core/entities/unique-entity-id';
import {
  Category,
  CategoryProps,
} from '../../modules/categories/enterprise/entities/category';

export function MakeCategory(
  override: Partial<CategoryProps> = {},
  id?: UniqueEntityID
) {
  const category = Category.create(
    {
      name: faker.commerce.department(),
      icon: faker.internet.emoji({ types: ['food'] }),
      ...override,
    },
    id
  );

  return category;
}
