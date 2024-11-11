import { IPet, IPetReponse } from "./models/pet.model"
import { expect } from "@playwright/test"
import { RequestHolder } from "./request.holder"

export class PetController extends RequestHolder{
  async createPet (newPet:IPet):Promise<IPetReponse>{
    const res = await this.request.post('https://petstore.swagger.io/v2/pet',{
      data:newPet
    })
    expect(res.status()).toBe(200)
    return await res.json()
  }
  async updatePet (petModel:IPet):Promise<IPetReponse>{
    const res = await this.request.put('https://petstore.swagger.io/v2/pet',{
      data:petModel
    })
    expect(res.status()).toBe(200)
    return await res.json()
  }
  async getPetById(petID:number):Promise<IPetReponse>{
    const response = await this.request.get(`https://petstore.swagger.io/v2/pet/${petID}`)
    expect(response.status()).toBe(200);
    return await response.json()
}
  async findPetByStatus (status:string[]):Promise<IPetReponse>{
    const res = await this.request.get(`https://petstore.swagger.io/v2/pet/findByStatus`, {
      params:{
        status:status.join(',')
      }
    }
    )
    expect(res.status()).toBe(200);
    return await res.json()
}
async deletePet(idNumber:number){
  const response = await this.request.delete(`https://petstore.swagger.io/v2/pet/${idNumber}`);
  expect(response.status()).toBe(200);
  return await response.json();

}
}