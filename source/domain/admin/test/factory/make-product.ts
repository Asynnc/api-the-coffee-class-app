import { faker } from '@faker-js/faker';
import { UniqueEntityID } from '../../../../core/entities/unique-entity-id';
import { Product, ProductProps } from '../../modules/products/enterprise/entities/product';

export function MakeProduct(
  override: Partial<ProductProps> = {},
  id?: UniqueEntityID
) {
  const product = Product.create({
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

  return product;
}
