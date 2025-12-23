const { test, expect } = require('@playwright/test');
const { homePage } = require('../pageObjects/homePage.pom.js');

test.describe('GreenKart - Quantity Management', () => {
    let page;
    let home;
    const APP_URL = 'https://rahulshettyacademy.com/seleniumPractise/#/';

    test.beforeEach(async ({ browser }) => {
        const context = await browser.newContext();
        page = await context.newPage();
        home = new homePage(page);
        await home.launchUrl(APP_URL);
        await home.waitForProductsToLoad();
    });

    test('Verify default quantity is 1 for all products', async () => {
        // Check first 5 products
        for (let i = 0; i < 5; i++) {
            const quantity = await home.getProductQuantity(i);
            expect(quantity).toBe('1');
        }
    });

    test('Increment quantity using + button', async () => {
        // Get initial quantity
        let quantity = await home.getProductQuantity(0);
        expect(quantity).toBe('1');
        
        // Click + button once
        await home.incrementQuantity(0);
        await page.waitForTimeout(300);
        
        // Verify quantity increased to 2
        quantity = await home.getProductQuantity(0);
        expect(quantity).toBe('2');
    });

    test('Increment quantity multiple times', async () => {
        // Click + button multiple times
        for (let i = 0; i < 4; i++) {
            await home.incrementQuantity(0);
            await page.waitForTimeout(200);
        }
        
        // Verify quantity is now 5
        const quantity = await home.getProductQuantity(0);
        expect(quantity).toBe('5');
    });

    test('Decrement quantity using - button', async () => {
        // First increment to 3
        for (let i = 0; i < 2; i++) {
            await home.incrementQuantity(0);
            await page.waitForTimeout(200);
        }
        
        let quantity = await home.getProductQuantity(0);
        expect(quantity).toBe('3');
        
        // Decrement by 1
        await home.decrementQuantity(0);
        await page.waitForTimeout(300);
        
        quantity = await home.getProductQuantity(0);
        expect(quantity).toBe('2');
    });

    test('Decrement quantity multiple times', async () => {
        // Increment to 5
        for (let i = 0; i < 4; i++) {
            await home.incrementQuantity(0);
            await page.waitForTimeout(200);
        }
        
        // Decrement by 3
        for (let i = 0; i < 3; i++) {
            await home.decrementQuantity(0);
            await page.waitForTimeout(200);
        }
        
        const quantity = await home.getProductQuantity(0);
        expect(quantity).toBe('2');
    });

    test('Quantity cannot go below 1 when decrementing', async () => {
        // Start with default quantity 1
        let quantity = await home.getProductQuantity(0);
        expect(quantity).toBe('1');
        
        // Try to decrement (should stay at 1)
        await home.decrementQuantity(0);
        await page.waitForTimeout(300);
        
        quantity = await home.getProductQuantity(0);
        expect(quantity).toBe('1');
    });

    test('Directly edit quantity in input field', async () => {
        // Click on quantity field and set to 5
        await home.setProductQuantity(0, 5);
        await page.waitForTimeout(300);
        
        // Verify quantity is 5
        const quantity = await home.getProductQuantity(0);
        expect(quantity).toBe('5');
    });

    test('Set high quantity directly', async () => {
        await home.setProductQuantity(0, 10);
        await page.waitForTimeout(300);
        
        const quantity = await home.getProductQuantity(0);
        expect(quantity).toBe('10');
    });

    test('Quantity updates correctly after multiple increments and decrements', async () => {
        // Increment 5 times
        for (let i = 0; i < 5; i++) {
            await home.incrementQuantity(0);
            await page.waitForTimeout(150);
        }
        
        let quantity = await home.getProductQuantity(0);
        expect(quantity).toBe('6');
        
        // Decrement 2 times
        for (let i = 0; i < 2; i++) {
            await home.decrementQuantity(0);
            await page.waitForTimeout(150);
        }
        
        quantity = await home.getProductQuantity(0);
        expect(quantity).toBe('4');
    });

    test('Quantity management works on different products', async () => {
        // Increment quantity for product at index 1
        await home.incrementQuantity(1);
        await page.waitForTimeout(300);
        
        let quantity1 = await home.getProductQuantity(1);
        expect(quantity1).toBe('2');
        
        // Increment quantity for product at index 2
        for (let i = 0; i < 3; i++) {
            await home.incrementQuantity(2);
            await page.waitForTimeout(150);
        }
        
        let quantity2 = await home.getProductQuantity(2);
        expect(quantity2).toBe('4');
        
        // First product should still be at default
        let quantity0 = await home.getProductQuantity(0);
        expect(quantity0).toBe('1');
    });

    test('Quantity can be set to large number', async () => {
        await home.setProductQuantity(0, 100);
        await page.waitForTimeout(300);
        
        const quantity = await home.getProductQuantity(0);
        expect(quantity).toBe('100');
    });
});
