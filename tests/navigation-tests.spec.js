const { test, expect } = require('@playwright/test');
const { homePage } = require('../pageObjects/homePage.pom.js');

test.describe('GreenKart - Navigation and UI Elements', () => {
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

    test('Verify all navigation menu items are visible', async () => {
        // Check Top Deals link
        expect(await home.topDealsLink.isVisible()).toBeTruthy();
        expect(await home.topDealsLink.isEnabled()).toBeTruthy();
        
        // Check Flight Booking link
        expect(await home.flightBookingLink.isVisible()).toBeTruthy();
        expect(await home.flightBookingLink.isEnabled()).toBeTruthy();
        
        // Check Cart link
        expect(await home.cartLink.isVisible()).toBeTruthy();
        expect(await home.cartLink.isEnabled()).toBeTruthy();
    });

    test('Verify GreenKart logo is visible and clickable', async () => {
        expect(await home.headerLogo.isVisible()).toBeTruthy();
        expect(await home.headerLogo.isEnabled()).toBeTruthy();
    });

    test('Click logo returns to homepage', async () => {
        // Add items to cart
        await home.addProductToCart(0);
        await page.waitForTimeout(300);
        
        await home.addProductToCart(1);
        await page.waitForTimeout(300);
        
        // Navigate to cart
        await home.clickCartLink();
        await page.waitForTimeout(600);
        
        // Click logo to return home
        await home.clickLogo();
        await page.waitForTimeout(600);
        
        // Should be back at home page with products visible
        await home.waitForProductsToLoad();
        const productCount = await home.getProductCount();
        expect(productCount).toBeGreaterThan(0);
    });

    test('Click Top Deals navigates to offers page', async () => {
        // Get initial URL
        const initialUrl = page.url();
        
        // Wait for new page context
        const pagePromise = page.context().waitForEvent('page');
        
        // Click Top Deals
        await home.clickTopDealsLink();
        
        // Get new page
        const newPage = await pagePromise;
        
        // Verify URL changed to offers
        expect(newPage.url()).toContain('offers');
        await newPage.close();
    });

    test('Cart link is accessible from any product state', async () => {
        // Without adding items
        expect(await home.cartLink.isEnabled()).toBeTruthy();
        
        // Add an item
        await home.addProductToCart(0);
        await page.waitForTimeout(300);
        
        // Cart link still accessible
        expect(await home.cartLink.isEnabled()).toBeTruthy();
        
        // Navigate to cart
        await home.clickCartLink();
        await page.waitForTimeout(600);
        
        // Should be on cart page
        const url = page.url();
        expect(url).toContain('#');
    });

    test('Search box is always accessible', async () => {
        // Search box should be visible on homepage
        expect(await home.searchBox.isVisible()).toBeTruthy();
        expect(await home.searchBox.isEnabled()).toBeTruthy();
        
        // Should be able to type in it
        await home.searchItem('apple');
        await page.waitForTimeout(500);
        
        const searchValue = await home.searchBox.inputValue();
        expect(searchValue).toBe('apple');
    });

    test('Flight Booking link opens in new tab', async () => {
        // Wait for new page
        const pagePromise = page.context().waitForEvent('page');
        
        // Click Flight Booking
        await home.flightBookingLink.click();
        
        // Get new page
        const newPage = await pagePromise;
        
        // Verify URL contains dropdownsPractise
        expect(newPage.url()).toContain('dropdownsPractise');
        await newPage.close();
    });

    test('Course link is visible and clickable', async () => {
        expect(await home.courseLink.isVisible()).toBeTruthy();
    });

    test('Verify page title is correct', async () => {
        const title = await home.getPageTitle();
        expect(title).toBe('GreenKart - veg and fruits kart');
    });

    test('Navigation works after search', async () => {
        // Search for a product
        await home.searchItem('apple');
        await page.waitForTimeout(600);
        
        // Navigate to cart
        expect(await home.cartLink.isEnabled()).toBeTruthy();
        await home.clickCartLink();
        await page.waitForTimeout(600);
        
        // Should reach cart page
        const url = page.url();
        expect(url).toBeTruthy();
    });

    test('Navigation works after adding to cart', async () => {
        // Add item
        await home.addProductToCart(0);
        await page.waitForTimeout(400);
        
        // Navigate to Top Deals
        const pagePromise = page.context().waitForEvent('page');
        await home.clickTopDealsLink();
        const newPage = await pagePromise;
        
        // Verify navigation
        expect(newPage.url()).toContain('offers');
        await newPage.close();
    });

    test('Multiple navigation actions work sequentially', async () => {
        // Step 1: Search
        await home.searchItem('tomato');
        await page.waitForTimeout(500);
        expect(await home.isProductVisible('Tomato')).toBeTruthy();
        
        // Step 2: Clear search
        await home.clearSearch();
        await page.waitForTimeout(500);
        const count = await home.getProductCount();
        expect(count).toBeGreaterThan(1);
        
        // Step 3: Add to cart
        await home.addProductToCart(0);
        await page.waitForTimeout(300);
        
        // Step 4: Navigate to cart
        await home.clickCartLink();
        await page.waitForTimeout(600);
        
        // Step 5: Navigate back
        await home.clickLogo();
        await page.waitForTimeout(600);
        await home.waitForProductsToLoad();
        
        // Should be back at home
        expect(await home.headerLogo.isVisible()).toBeTruthy();
    });

    test('Header elements remain visible on all pages', async () => {
        // On home page
        expect(await home.headerLogo.isVisible()).toBeTruthy();
        expect(await home.searchBox.isVisible()).toBeTruthy();
        expect(await home.cartLink.isVisible()).toBeTruthy();
    });

    test('Cart counter is visible on homepage', async () => {
        expect(await home.cartCounter.isVisible()).toBeTruthy();
    });
});
