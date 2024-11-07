import {test, expect} from '@playwright/test';
import { StoreController } from '../api/store.controller';
import {IOrder} from '../api/models/store.models'

test.describe.configure({mode: "serial"});

test.describe.skip('store api tests', () => {

test('get inventory', async ({ request }) => {
    const storeController = new StoreController(request);
    const response = await storeController.getInventory();
  });

test('place order and get order by id', async ({ request }) => {
    const storeController = new StoreController(request);
    const order:IOrder = {
        "id": 55554444,
        "petId": 5,
        "quantity": 0,
        "shipDate": "2024-10-30T06:51:31.898Z",
        "status": "placed",
        "complete": true
      }
      const orderResponse = await storeController.placeOrder(order);
      const getOrderResponse = await storeController.getOrderById(orderResponse.id);
  });

  test('delete order', async ({request}) => {
      const storeController = new StoreController(request);
      const deleteOrderResponse = await storeController.deleteOrder();
  });
});
