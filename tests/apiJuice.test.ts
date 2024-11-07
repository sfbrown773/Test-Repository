import {test, expect} from '@playwright/test';
import { JuiceController } from '../api/juice.controller';
import { IAuthObject, ILogin, IQuantity, ISecurityAnswers, IUser } from '../api/models/juice.model';

//create controllers for all of this. add and delete some items. create a user using API. Using UI, log in with this user
//email should have 'to remove' in it.

test.only('login and change item count', async ({ request }) => {
    //might be good to do a stepwise item count (+1 or -1, the way the cart actually works)
    const juiceController = new JuiceController(request);
    const newLogin:ILogin = {
        email: "testing-talk@example.com",
        password: process.env.PASSWORD
    }
    const  juiceResponse = await juiceController.login(newLogin);
    console.log(juiceResponse)

    const numberToAdd:IQuantity = {
        'quantity':4
    }
    //If quantity>5, returns 400 error
    const authorization:IAuthObject = {
        headers:{
            'Accept':'application/json, text/plain, *\/*',
            'Authorization':`Bearer ${juiceResponse.authentication.token}`
    }
}
    const whichItemToAdd = 20
    //I would want to have an object that stores the codes for the different items,
    //so that here I could just add the name, instead of looking up the number.
    // search?q=.data.id = 20.data.ProductID
    const addResponse = await juiceController.addToBasket(whichItemToAdd, numberToAdd, authorization);
    console.log(addResponse);
});
test('create user', async ({ request }) => {
    const juiceController = new JuiceController(request);
    const newUser:IUser = {
        email : "testuser4@toremove.com",
        password : "toremove",
        passwordRepeat : "toremove",
        securityAnswer : "Arlene",
        securityQuestion : {
            id: 6,
            question: "Paternal grandmother's first name?",
            createdAt: "2024-10-17T09:25:22.499Z",
            updatedAt : "2024-10-17T09:25:22.499Z"
        }
    };
    //I guess this next object isn't actually necessary?
    const newUserSecurity:ISecurityAnswers = {
    SecurityQuestionId:6,
    UserId:24,
    answer: "Arlene"
    }
    const createUserResponse = await juiceController.createUser(newUser,newUserSecurity);
    console.log(createUserResponse);
    const deleteUserResponse = await juiceController.deleteUser(newUserSecurity.UserId)
});
/*

test('delete user', async ({ request }) => {
    const juiceController = new JuiceController(request);
    const newUser:IUser = {
        email : "testuser3@toremove.com",
        password : "toremove",
        passwordRepeat : "toremove",
        securityAnswer : "Arlene",
        securityQuestion : {
            id: 6,
            question: "Paternal grandmother's first name?",
            createdAt: "2024-10-17T09:25:22.499Z",
            updatedAt : "2024-10-17T09:25:22.499Z"
        }
    };
    const deleteUserResponse = await juiceController.deleteUser(newUser);
    console.log(deleteUserResponse);
    //returns 500
});*/