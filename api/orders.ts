import { orderDetails } from './orderDetails';
import { OrderTableEntry } from '../../src/app/modules/orders/models';

export const orders: OrderTableEntry[] = [];

orderDetails.forEach(order => {
  orders.push({
    id: order.id,
    orderDate: order.orderDate,
    orderNumber: order.orderNumber,
    companyName: order.companyName,
    username: order.user,
    status: order.status,
    orderType: order.orderType,
    street: order.address.street,
    houseNumber: order.address.houseNumber,
    postalCode: order.address.zipCode,
    city: order.address.city,
    customerFirstname: order.customer.firstName,
    customerLastname: order.customer.lastName,
  });
});
