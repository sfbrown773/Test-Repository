//add a bit of text
export interface ILogin {
    email:string,
    password:string|undefined
}
export interface ILoginResponse{
    authentication:Auth
}
interface Auth{
    token: string,
    bid: number,
    umail: string
}
export interface IAuthObject {
    headers:Headers
}
interface Headers{
        Accept:string,
        Authorization:string
}
export interface IQuantity {
    quantity:number
}
export interface IQuantityResponse {
        status: string,
        data:Data
}
export interface Data {
    ProductId: number,
    BasketId: number,
    id: number,
    quantity: number,
    createdAt: string, //really a date, but that gave me problems last time
    updatedAt: string //also date
}
export interface IUser{
    email : string,
    password : string,
    passwordRepeat : string,
    securityAnswer : string,
    securityQuestion : SecurityAnswers_IUser
}
//this createdAt thing could be the problem -- check in which object they are located

interface SecurityAnswers_IUser {
    id: number,
    question: string,
    createdAt: string,
    updatedAt : string
}

export interface ISecurityAnswers {
    SecurityQuestionId:number,
    UserId:number,
    answer: string
}

export interface IUserPromise {
    "status": string,
    "data": data_IUserPromise
}
interface data_IUserPromise {
    "username": string,
    "role": string,
    "deluxeToken": string,
    "lastLoginIp": string,
    "profileImage": string,
    "isActive": boolean,
    "id": number,
    "email": string,
    "updatedAt": string,
    "createdAt": string,
    "deletedAt": string
}
