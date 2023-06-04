import { faker } from '@faker-js/faker';
import { Category, CategoryProps } from '../../source/domain/orders/enterprises/entities/category';
import { UniqueEntityID } from '../../source/core/entities/unique-entity-id';

export function MakeQuestion(
  override: Partial<CategoryProps> = {},
  id?: UniqueEntityID
) {
  const question = Category.create({
    name: faker.commerce.department(),
    icon: faker.internet.emoji({ types: ['food'] }),
    ...override
  }, id);

  return question;
}
