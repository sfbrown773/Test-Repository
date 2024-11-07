export interface IStoreInventoryRes{
        "3000": number,
        "5000": number,
        "6000": number,
        "7000": number,
        "8000": number,
        "sold": number,
        "VL4EQE": number,
        "string": number,
        "pending": number,
        "available": number,
        "status": number,
        "Unavailable": number
}
export interface IOrder{
        "id": number,
        "petId": number,
        "quantity": number,
        "shipDate": string,
        "status": string,
        "complete": boolean
}
        