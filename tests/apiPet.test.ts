import {test, expect} from '@playwright/test';
import { PetController } from '../api/pet.controllers.ts';
import {IPet} from '../api/models/pet.model'

test.describe.configure({ mode: "serial" });

test.describe('api tests', () => {
  
  test.only('pet by status test ', async ({ request }) => {
    
    const petController = new PetController(request);
    const response = await petController.findPetByStatus(['available']);
    console.log(response);
  });
  test('create pet ', async ({ request }) => {
    const petController = new PetController(request);
    const newPet:IPet = {
      "id": 554455445544,
      "category": {
        "id": 0,
        "name": "string"
      },
      "name": "doggie",
      "photoUrls": [
        "string"
      ],
      "tags": [
        {
          "id": 0,
          "name": "string"
        }
      ],
      "status": "available"
    }
    const  petResponse = await petController.createPet(newPet);
  });

  test('update pet, check change', async ({ request }) => {
    const petController = new PetController(request);
    const petModel:IPet = {
      "id": 554455445544,
      "category": {
        "id": 0,
        "name": "string"
      },
      "name": "testPet_2",
      "photoUrls": [
        "string"
      ],
      "tags": [
        {
          "id": 0,
          "name": "string"
        }
      ],
      "status": "available"
    }
    const  petResponse = await petController.updatePet(petModel);
    console.log(petResponse);
    const checkPetName = await petController.getPetById(petResponse.id);
    //expect(checkPetName.name).toBe('testPet_2');
  });

  /*test('get pets by status', async ({ request }) => {
    const petController = new PetController(petModel);
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
  });*/

test('delete req ', async ({ request }) => {
  const petController = new PetController(request);
  const deleteOrderResponse = await petController.deletePet(554455445544);
  });

  test('test', async ({ request }) => {

    const petModel = {
      "id": 78787878,
      "category": {
        "id": 0,
        "name": "string"
      },
      "name": "testPet2",
      "photoUrls": [
        "string"
      ],
      "tags": [
        {
          "id": 0,
          "name": "string"
        }
      ],
      "status": "available"
    }
    const createResponse = await request.post('https://petstore.swagger.io/v2/pet',{
      data:petModel
    })
    const responseBody = await createResponse.json();
    expect(createResponse.status()).toBe(200);


    const deleteRes = await request.delete(`https://petstore.swagger.io/v2/pet/${responseBody.id}`)
    console.log(await deleteRes.json())
    expect(deleteRes.status()).toBe(200);
  });



});
