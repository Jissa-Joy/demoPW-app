/*import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';*/

const { test, expect } = require('@playwright/test');
const {LoginPage} = require('../pages/LoginPage')
const {HomePage} = require('../pages/HomePage')
const {CartPage} = require ('../pages/CartPage')

test('POM Test cases', async({page}) =>
{
//Login 
const login = new LoginPage(page);
await login.gotoLoginPage();
await login.login('jisaj','test123')

//await page.waitForTimeout(3000)

const home = new HomePage(page)
await home.addProductToCart()
//Home
//checking if code is updating in git

const cart = new CartPage(page)
await cart.placeOrder();
});