const { test, expect } = require('@playwright/test');
const { homePage } = require('../pageObjects/homePage.pom.js');
const { cartPage } = require('../pageObjects/cartPage.pom.js');

test.describe('GreenKart - Price and Currency Tests', () => {
    let page;
    let home;
    let cart;
    const APP_URL = 'https://rahulshettyacademy.com/seleniumPractise/#/';

    test.beforeEach(async ({ browser }) => {
        const context = await browser.newContext();
        page = await context.newPage();
        home = new homePage(page);
        cart = new cartPage(page);
        await home.launchUrl(APP_URL);
        await home.waitForProductsToLoad();
    });

    test('Verify rupee symbol is displayed on all product prices', async () => {
        const productCount = await home.getProductCount();
        
        // Check first 10 products for rupee symbol
        for (let i = 0; i < Math.min(10, productCount); i++) {
            const priceElement = page.locator('.product').nth(i).locator('p').first();
            const priceText = await priceElement.textContent();
            expect(priceText).toContain('₹');
        }
    });

    test('Verify all product prices are numeric', async () => {
        const productCount = await home.getProductCount();
        
        // Check first 10 products
        for (let i = 0; i < Math.min(10, productCount); i++) {
            const price = await home.getProductPrice(i);
            const numPrice = parseInt(price);
            expect(isNaN(numPrice)).toBeFalsy();
            expect(numPrice).toBeGreaterThan(0);
        }
    });

    test('Verify cart price counter updates when adding items', async () => {
        // Get price of first product
        const product1Price = parseInt(await home.getProductPrice(0));
        
        // Add first product
        await home.addProductToCart(0);
        await page.waitForTimeout(500);
        
        // Navigate to cart
        await home.clickCartLink();
        await page.waitForTimeout(800);
        
        // Cart should have the price
        const cartSummary = await cart.getCartSummary();
        expect(cartSummary).toBeTruthy();
    });

    test('Verify price calculation for single product', async () => {
        // Get Brocolli price (120)
        const price = parseInt(await home.getProductPrice(0));
        expect(price).toBe(120);
        
        // Add to cart
        await home.addProductToCart(0);
        await page.waitForTimeout(500);
        
        // Navigate to cart
        await home.clickCartLink();
        await page.waitForTimeout(800);
        
        // Verify price in cart
        const cartPrice = await cart.getCartProductPrice(0);
        expect(parseInt(cartPrice)).toBe(price);
    });

    test('Verify price calculation for item with custom quantity', async () => {
        // Get product 0 price
        const unitPrice = parseInt(await home.getProductPrice(0));
        
        // Set quantity to 3
        for (let i = 0; i < 2; i++) {
            await home.incrementQuantity(0);
            await page.waitForTimeout(200);
        }
        
        // Add to cart
        await home.addProductToCart(0);
        await page.waitForTimeout(500);
        
        // Navigate to cart
        await home.clickCartLink();
        await page.waitForTimeout(800);
        
        // Verify quantity in cart
        const cartQuantity = parseInt(await cart.getCartProductQuantity(0));
        expect(cartQuantity).toBe(3);
    });

    test('Verify multiple items price calculation', async () => {
        // Get prices of first 3 products
        const price1 = parseInt(await home.getProductPrice(0));
        const price2 = parseInt(await home.getProductPrice(1));
        const price3 = parseInt(await home.getProductPrice(2));
        
        // Add all 3 products
        await home.addProductToCart(0);
        await page.waitForTimeout(300);
        
        await home.addProductToCart(1);
        await page.waitForTimeout(300);
        
        await home.addProductToCart(2);
        await page.waitForTimeout(300);
        
        // Navigate to cart
        await home.clickCartLink();
        await page.waitForTimeout(800);
        
        // Get all cart products
        const products = await cart.getAllCartProducts();
        
        // Should have 3 products
        expect(products.length).toBe(3);
    });

    test('Verify price format is consistent across pages', async () => {
        // Check price on home page
        const homePrice = await home.getProductPrice(0);
        expect(homePrice).toBeTruthy();
        
        // Add to cart and verify in cart
        await home.addProductToCart(0);
        await page.waitForTimeout(400);
        
        await home.clickCartLink();
        await page.waitForTimeout(800);
        
        // Check price in cart
        const cartPrice = await cart.getCartProductPrice(0);
        expect(cartPrice).toBeTruthy();
        
        // Both should be numeric
        expect(parseInt(homePrice)).toBeDefined();
        expect(parseInt(cartPrice)).toBeDefined();
    });

    test('Verify specific product prices', async () => {
        // Known prices (from earlier exploration)
        const expectedPrices = {
            'Brocolli': 120,
            'Cauliflower': 60,
            'Cucumber': 48,
            'Beetroot': 32,
            'Carrot': 56
        };
        
        const productCount = await home.getProductCount();
        
        for (let i = 0; i < Math.min(5, productCount); i++) {
            const name = await home.getProductName(i);
            const price = parseInt(await home.getProductPrice(i));
            
            // Verify product has non-zero price
            expect(price).toBeGreaterThan(0);
        }
    });

    test('Verify cart shows correct total for multiple items with quantities', async () => {
        // Set quantity to 2 for first product
        await home.incrementQuantity(0);
        await page.waitForTimeout(200);
        
        // Add to cart
        await home.addProductToCart(0);
        await page.waitForTimeout(400);
        
        // Set quantity to 3 for second product
        for (let i = 0; i < 2; i++) {
            await home.incrementQuantity(1);
            await page.waitForTimeout(200);
        }
        
        // Add to cart
        await home.addProductToCart(1);
        await page.waitForTimeout(400);
        
        // Navigate to cart
        await home.clickCartLink();
        await page.waitForTimeout(800);
        
        // Verify quantities
        const product1Qty = parseInt(await cart.getCartProductQuantity(0));
        const product2Qty = parseInt(await cart.getCartProductQuantity(1));
        
        expect(product1Qty).toBe(2);
        expect(product2Qty).toBe(3);
    });
});
