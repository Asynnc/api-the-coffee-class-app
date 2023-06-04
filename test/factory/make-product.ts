import { faker } from '@faker-js/faker';
import { Product, ProductProps } from '../../source/domain/orders/enterprise/entities/product';
import { UniqueEntityID } from '../../source/core/entities/unique-entity-id';

export function MakeProduct(
  override: Partial<ProductProps> = {},
  id?: UniqueEntityID
) {
  const category = Product.create({
    name: faker.commerce.product(),
    description: faker.commerce.productDescription(),
    imagePath: faker.system.directoryPath(),
    price: Number(faker.finance.amount(5, 100, 2)),
    category: faker.string.uuid(),
    ingredients: [{
      name: faker.commerce.productMaterial(),
      icon: faker.internet.emoji()
    },
    ],
    ...override
  }, id);

  return category;
}
