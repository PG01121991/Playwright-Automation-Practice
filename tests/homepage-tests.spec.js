const { test, expect } = require('@playwright/test');
const { homePage } = require('../pageObjects/homePage.pom.js');

test.describe('GreenKart - Homepage and Product Browsing', () => {
    let page;
    let home;
    const APP_URL = 'https://rahulshettyacademy.com/seleniumPractise/#/';

    test.beforeEach(async ({ browser }) => {
        const context = await browser.newContext();
        page = await context.newPage();
        home = new homePage(page);
        await home.launchUrl(APP_URL);
    });

    test('Verify homepage loads with all products', async () => {
        // Wait for products to load
        await home.waitForProductsToLoad();
        
        // Verify page title
        const title = await home.getPageTitle();
        expect(title).toBe('GreenKart - veg and fruits kart');
        
        // Verify header logo is visible
        expect(await home.headerLogo.isVisible()).toBeTruthy();
        
        // Verify search box is visible
        expect(await home.searchBox.isVisible()).toBeTruthy();
        
        // Verify cart link is visible
        expect(await home.cartLink.isVisible()).toBeTruthy();
        
        // Verify at least 20 products are displayed
        const productCount = await home.getProductCount();
        expect(productCount).toBeGreaterThanOrEqual(20);
    });

    test('Verify product card details', async () => {
        await home.waitForProductsToLoad();
        
        // Get first product details
        const productName = await home.getProductName(0);
        expect(productName).toContain('Brocolli');
        
        const productPrice = await home.getProductPrice(0);
        expect(productPrice).toBeTruthy();
        expect(parseInt(productPrice)).toBeGreaterThan(0);
        
        const quantity = await home.getProductQuantity(0);
        expect(quantity).toBe('1');
    });

    test('Verify products are displayed in correct order', async () => {
        await home.waitForProductsToLoad();
        
        // Get first 5 products
        const products = [];
        for (let i = 0; i < 5; i++) {
            const name = await home.getProductName(i);
            products.push(name);
        }
        
        // Expected order
        const expectedProducts = ['Brocolli', 'Cauliflower', 'Cucumber', 'Beetroot', 'Carrot'];
        products.forEach((product, index) => {
            expect(product).toContain(expectedProducts[index]);
        });
    });

    test('Verify rupee symbol is displayed in prices', async () => {
        await home.waitForProductsToLoad();
        
        // Check first 5 products have rupee symbol
        const productCards = page.locator('.product');
        for (let i = 0; i < 5; i++) {
            const priceElement = productCards.nth(i).locator('p').first();
            const priceText = await priceElement.textContent();
            expect(priceText).toContain('₹');
        }
    });

    test('Verify cart counter displays items correctly', async () => {
        await home.waitForProductsToLoad();
        
        // Initial cart should be empty or show 0
        const initialCounter = await home.getCartCounterText();
        expect(initialCounter).toContain('0');
    });

    test('Verify top deals link is visible and clickable', async () => {
        await home.waitForProductsToLoad();
        
        expect(await home.topDealsLink.isVisible()).toBeTruthy();
        expect(await home.topDealsLink.isEnabled()).toBeTruthy();
    });

    test('Verify flight booking link is visible', async () => {
        await home.waitForProductsToLoad();
        
        expect(await home.flightBookingLink.isVisible()).toBeTruthy();
    });

    test('Verify all product elements are accessible', async () => {
        await home.waitForProductsToLoad();
        
        const productCount = await home.getProductCount();
        
        for (let i = 0; i < 3; i++) {
            const name = await home.getProductName(i);
            expect(name).toBeTruthy();
            
            const price = await home.getProductPrice(i);
            expect(price).toBeTruthy();
            
            const quantity = await home.getProductQuantity(i);
            expect(quantity).toBeTruthy();
        }
    });
});
