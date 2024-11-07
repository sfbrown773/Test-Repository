import { expect } from "@playwright/test"
import { RequestHolder } from "./request.holder"
import { ILogin, ILoginResponse, IQuantity, IQuantityResponse, IAuthObject, IUserPromise, IUser, ISecurityAnswers } from "./models/juice.model"
import { ok } from "assert";

export class JuiceController extends RequestHolder{
    async login (loginCreds:ILogin):Promise<ILoginResponse>{
        const res = await this.request.post('https://mental-arline-testingtalk-42e6e59b.koyeb.app/rest/user/login',{
          data:loginCreds
        });
        expect(res.statusText()).toBe('OK');
        return await res.json();
    }
    async addToBasket (productNumber:number,quantity:IQuantity, authObject:IAuthObject):Promise<IQuantityResponse>{
        const authToken = authObject.headers.Authorization
        const res = await this.request.put(`https://mental-arline-testingtalk-42e6e59b.koyeb.app/api/BasketItems/${productNumber}`,{
            data:quantity,
            headers:{
                Accept:'application/json, text/plain, */*',
                Authorization:  `${authToken}`
            }
        })

        expect(res.status()).toBe(200)
        return await res.json()
    }

    async createUser (userInfo:IUser, securityAnswers:ISecurityAnswers):Promise<IUserPromise>{
        const res = await this.request.post('https://mental-arline-testingtalk-42e6e59b.koyeb.app/api/Users/',{
            data:userInfo
        });
        expect(res.status()).toBe(201);
    /*    const responseSecurity = await this.request.post('https://mental-arline-testingtalk-42e6e59b.koyeb.app/api/SecurityAnswers/',{
            data:securityAnswers
        });
        expect(responseSecurity.status()).toBe(201);*/

        return await res.json();//, responseSecurity.json();
    }
    async deleteUser (UserId:number){
        const res = await this.request.delete(`https://mental-arline-testingtalk-42e6e59b.koyeb.app/api/Users/${UserId}`);
        expect(res.status()).toBe(200);
    /*    const responseSecurity = await this.request.post('https://mental-arline-testingtalk-42e6e59b.koyeb.app/api/SecurityAnswers/',{
            data:securityAnswers
        });
        expect(responseSecurity.status()).toBe(201);*/

        return await res.json();//, responseSecurity.json();
    }
}