import { RequestHolder } from "./request.holder";
import { expect } from "playwright/test";
import { IStoreInventoryRes, IOrder } from "./models/store.models";

export class StoreController extends RequestHolder{
    async getInventory():Promise<IStoreInventoryRes>{
        const response = await this.request.get('https://petstore.swagger.io/v2/store/inventory')
        expect(response.status()).toBe(200);
        return await response.json();
    }
    async placeOrder(order:IOrder):Promise<IOrder>{
        const response = await this.request.post('https://petstore.swagger.io/v2/store/order',{
            data:order
          })
          expect(response.status()).toBe(200);
          return await response.json();
    }
    async getOrderById(orderID:number):Promise<IOrder>{
        const response = await this.request.get(`https://petstore.swagger.io/v2/store/order/${orderID}`)
        expect(response.status()).toBe(200);
        return await response.json()
    }
    async deleteOrder(){
        const response = await this.request.delete('https://petstore.swagger.io/v2/store/order/55554444');
        expect(response.status()).toBe(200);
        return await response.json();

    }
}