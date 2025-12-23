const { expect } = require('@playwright/test');
const { Given, When, Then } = require('@cucumber/cucumber');
const { homePage } = require('../../pageObjects/homePage.pom.js');
const { chromium } = require('playwright');

Given('The user navigates to the GreenKart homepage', async function () {
    this.browser = await chromium.launch({ headless: false }); // launch browser 
    this.page = await this.browser.newPage(); // create new page 
    this.homePage = new homePage(this.page);
    await this.page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');
});

When('The homepage loads', async function () {
    await this.homePage.waitForProductsToLoad();
});
     
Then('The user should see the GreenKart header', async function () {
    const title = await this.homePage.getPageTitle();
    expect(title).toBe('GreenKart - veg and fruits kart');
});

Then('The user should see the search box', async function () {
    expect(await this.homePage.searchBox.isVisible()).toBeTruthy();
});

Then('The user should see the cart link with counter showing {int} items', async function (int) {
    expect(await this.homePage.cartLink.isVisible()).toBeTruthy();
    const cartCounter = await this.homePage.getCartCounterText();
    expect(cartCounter).toBe(int);
});

Then('The user should see at least {int} products displayed in the product grid', async function (int) {
    const products = await this.page.$$('.product');
    expect(products.length).toBeGreaterThanOrEqual(int);
});
    
When('The user locate the first product in the product grid', async function () {      
    const productName = await this.homePage.getProductName(0);
    expect(productName).toContain('Brocolli');
});
    
Then('The user should see the product image', async function () {
    const productImageVisible = await this.homePage.isProductImageVisible(0);
    expect(productImageVisible).toBeTruthy();
});

Then('The user should see the product name', async function () {
    const productName = await this.homePage.getProductName(0);
    expect(productName).toContain('Brocolli');
});
         
Then('The user should see quantity controls \\(-, quantity input, +\\)', async function () {
    const quantity = await this.homePage.getProductQuantity(0);
    expect(quantity).toBe('1');
});

Then('The user should see the ADD TO CART button', async function () {
    const addToCartVisible = await this.homePage.isAddToCartButtonVisible(0);
    expect(addToCartVisible).toBeTruthy();
});

Then('The user should see the product price', async function () {
    const productPrice = await this.homePage.getProductPrice(0);
    expect(productPrice).toBeTruthy();
    expect(parseInt(productPrice)).toBeGreaterThan(0);
});