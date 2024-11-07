import { APIRequestContext } from "@playwright/test";

export class RequestHolder {
   constructor(protected request:APIRequestContext){}
}