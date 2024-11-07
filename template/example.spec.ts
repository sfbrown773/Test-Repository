import { test } from '@playwright/test';
import { PetController } from '../apis/pet.controller';
import {IPet} from '../apis/models/pet.model'


test.only('posts', async ({ request }) => {

  const petController  = new PetController(request)

  const petModel:IPet = {
    "id": 123123123123,
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

 const resp = await petController.createPet(petModel)


});















