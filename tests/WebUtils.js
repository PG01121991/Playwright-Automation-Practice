const{test, expect} = require('@playwright/test');

module.exports = class greenKart {
    constructor(productName, productPrice, quantity){
        this.productName = productName;
        this.productPrice = productPrice;
        this.quantity = quantity;
    }
    
    async launchWebPage(page, url) {
        await page.goto(url);
    }
    //Select a any product by its name from the list of products
    //increase quantity and add to cart
    //calculate total price of the items in the cart
    async addProductToCart(page, productName, quantity) {
        const products = page.locator('.product');
        const count = await products.count();
        for (let i = 0; i < count; i++) {
            const prodName = await products.nth(i).locator('h4.product-name').textContent();
            if (prodName.includes(productName)) {
                for (let j = 1; j < quantity; j++) {
                    await products.nth(i).getByText("+").click();
                }
                await products.nth(i).getByText("ADD TO CART").click();
                break;
            }
        }
    }
    async getTotalCartPrice(page) {
        await page.locator('.cart-icon').click();
        const cartItems = page.locator('.product-info');
        const itemCount = await cartItems.count();
        let totalPrice = 0;
        for (let i = 0; i < itemCount; i++) {
            const priceText = await cartItems.nth(i).locator('.product-price').textContent();
            const quantityText = await cartItems.nth(i).locator('.quantity').textContent();
            const price = parseFloat(priceText);
            const quantity = parseInt(quantityText);
            totalPrice += price * quantity;
        }
        return totalPrice;
    }
    async setProductQuantity(page, productName, quantity) {
        const products = page.locator('.product');
        const count = await products.count();
        for (let i = 0; i < count; i++) {
            const prodName = await products.nth(i).locator('h4.product-name').textContent();
            if (prodName.includes(productName)) {
                await products.nth(i).locator('input.quantity').fill(quantity.toString());
                break;
            }
        }
    }
    //Set quantity for a specific product
    //await greenKart.setProductQuantity(page, "Broccoli", 3);

}