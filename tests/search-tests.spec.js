const { test, expect } = require('@playwright/test');
const { homePage } = require('../pageObjects/homePage.pom.js');

test.describe('GreenKart - Product Search Functionality', () => {
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

    test('Search for a vegetable by name - Apple', async () => {
        // Perform search
        await home.searchItem('apple');
        
        // Wait for results to filter
        await page.waitForTimeout(800);
        
        // Verify only Apple product is displayed
        expect(await home.isProductVisible('Apple')).toBeTruthy();
        
        // Verify product count is 1
        const count = await home.getProductCount();
        expect(count).toBe(1);
    });

    test('Search for a vegetable by name - Tomato', async () => {
        await home.searchItem('tomato');
        await page.waitForTimeout(800);
        
        expect(await home.isProductVisible('Tomato')).toBeTruthy();
        
        const count = await home.getProductCount();
        expect(count).toBe(1);
    });

    test('Search for fruit by partial name - berry', async () => {
        await home.searchItem('berry');
        await page.waitForTimeout(800);
        
        // Should show products containing "berry" - Strawberry and Raspberry
        const productCount = await home.getProductCount();
        expect(productCount).toBeGreaterThan(0);
        
        // At least one product with "berry" should be visible
        let foundBerry = false;
        for (let i = 0; i < productCount; i++) {
            const name = await home.getProductName(i);
            if (name.toLowerCase().includes('berry')) {
                foundBerry = true;
                break;
            }
        }
        expect(foundBerry).toBeTruthy();
    });

    test('Search with no matching results', async () => {
        await home.searchItem('xyz123nonexistent');
        await page.waitForTimeout(800);
        
        // Verify no results message is shown
        expect(await home.verifyNoResultsMessage()).toBeTruthy();
    });

    test('Clear search to show all products again', async () => {
        // First search
        await home.searchItem('tomato');
        await page.waitForTimeout(800);
        
        let count = await home.getProductCount();
        expect(count).toBe(1);
        
        // Clear search
        await home.clearSearch();
        await page.waitForTimeout(800);
        
        // All products should be visible again
        count = await home.getProductCount();
        expect(count).toBeGreaterThanOrEqual(20);
    });

    test('Search is case insensitive', async () => {
        // Search in uppercase
        await home.searchItem('APPLE');
        await page.waitForTimeout(800);
        
        expect(await home.isProductVisible('Apple')).toBeTruthy();
        
        const count = await home.getProductCount();
        expect(count).toBe(1);
    });

    test('Search maintains search term in box', async () => {
        const searchTerm = 'carrot';
        await home.searchItem(searchTerm);
        await page.waitForTimeout(800);
        
        // Verify search term is still in the box
        const searchBoxValue = await home.searchBox.inputValue();
        expect(searchBoxValue).toBe(searchTerm);
    });

    test('Search with multiple characters', async () => {
        await home.searchItem('mango');
        await page.waitForTimeout(800);
        
        expect(await home.isProductVisible('Mango')).toBeTruthy();
        
        const count = await home.getProductCount();
        expect(count).toBe(1);
    });

    test('Search for nuts item', async () => {
        await home.searchItem('almond');
        await page.waitForTimeout(800);
        
        expect(await home.isProductVisible('Almonds')).toBeTruthy();
    });

    test('Search clears and shows all products', async () => {
        // Search for item
        await home.searchItem('corn');
        await page.waitForTimeout(800);
        
        let countFiltered = await home.getProductCount();
        expect(countFiltered).toBe(1);
        
        // Clear search by pressing Ctrl+A and Delete
        await home.searchBox.clear();
        await page.waitForTimeout(800);
        
        let countAll = await home.getProductCount();
        expect(countAll).toBeGreaterThan(countFiltered);
    });
});
