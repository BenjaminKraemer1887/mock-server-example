import { OrderCouponDto } from '../../src/app/modules/orders/models/order-coupon.dto';

const { faker } = require('@faker-js/faker');

export const coupons: OrderCouponDto[] = [];
for (let i = 0; i < 20; i++) {
  coupons.push({
    id: faker.datatype.uuid(),
    code: 'ABC' + i,
    name: faker.commerce.productName(),
    discount: {
      amount: faker.datatype.number({ min: 2, max: 50 }),
      currency: faker.helpers.arrayElement(['Euro', 'USD', 'YPN']),
      currencySymbol: '€',
    },
  });
}
