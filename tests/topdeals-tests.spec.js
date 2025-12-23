const { test, expect } = require('@playwright/test');
const { homePage } = require('../pageObjects/homePage.pom.js');
const { topDealsPage } = require('../pageObjects/topDealsPage.pom.js');

test.describe('GreenKart - Top Deals and Offers', () => {
    let context;
    let page;
    let page2;
    let home;
    let topDeals;
    const APP_URL = 'https://rahulshettyacademy.com/seleniumPractise/#/';

    test.beforeEach(async ({ browser }) => {
        context = await browser.newContext();
        page = await context.newPage();
        home = new homePage(page);
        await home.launchUrl(APP_URL);
        await home.waitForProductsToLoad();
    });

    test('Navigate to Top Deals page', async () => {
        // Set up listener for new page
        const pagePromise = context.waitForEvent('page');
        
        // Click Top Deals link
        await home.clickTopDealsLink();
        
        // Get new page
        page2 = await pagePromise;
        topDeals = new topDealsPage(page2);
        
        // Wait for page to load
        await topDeals.waitForPageToLoad();
        
        // Verify URL contains /offers
        expect(page2.url()).toContain('#/offers');
    });

    test('Verify table rows adjust based on dropdown selection - 5 rows', async () => {
        const pagePromise = context.waitForEvent('page');
        await home.clickTopDealsLink();
        page2 = await pagePromise;
        topDeals = new topDealsPage(page2);
        
        await topDeals.waitForPageToLoad();
        
        // Select 5 rows per page
        await topDeals.selectRowsPerPage('5');
        await page2.waitForTimeout(500);
        
        // Verify row count (including header)
        const rowCount = await topDeals.getDisplayedRowsCount();
        expect(rowCount).toBe(5);
    });

    test('Verify table rows adjust based on dropdown selection - 10 rows', async () => {
        const pagePromise = context.waitForEvent('page');
        await home.clickTopDealsLink();
        page2 = await pagePromise;
        topDeals = new topDealsPage(page2);
        
        await topDeals.waitForPageToLoad();
        
        // Select 10 rows per page
        await topDeals.selectRowsPerPage('10');
        await page2.waitForTimeout(500);
        
        // Verify row count
        const rowCount = await topDeals.getDisplayedRowsCount();
        expect(rowCount).toBe(10);
    });

    test('Verify table rows adjust based on dropdown selection - 20 rows', async () => {
        const pagePromise = context.waitForEvent('page');
        await home.clickTopDealsLink();
        page2 = await pagePromise;
        topDeals = new topDealsPage(page2);
        
        await topDeals.waitForPageToLoad();
        
        // Select 20 rows per page
        await topDeals.selectRowsPerPage('20');
        await page2.waitForTimeout(500);
        
        // Verify row count
        const rowCount = await topDeals.getDisplayedRowsCount();
        expect(rowCount).toBe(20);
    });

    test('Search for product in Top Deals page', async () => {
        const pagePromise = context.waitForEvent('page');
        await home.clickTopDealsLink();
        page2 = await pagePromise;
        topDeals = new topDealsPage(page2);
        
        await topDeals.waitForPageToLoad();
        
        // Search for wheat
        await topDeals.searchProduct('wheat');
        await page2.waitForTimeout(800);
        
        // Verify product is in results
        const found = await topDeals.verifyProductInResults('Wheat');
        expect(found).toBeTruthy();
    });

    test('Search for carrot in Top Deals', async () => {
        const pagePromise = context.waitForEvent('page');
        await home.clickTopDealsLink();
        page2 = await pagePromise;
        topDeals = new topDealsPage(page2);
        
        await topDeals.waitForPageToLoad();
        
        // Search for carrot
        await topDeals.searchProduct('carrot');
        await page2.waitForTimeout(800);
        
        // Verify product is in results
        const found = await topDeals.verifyProductInResults('Carrot');
        expect(found).toBeTruthy();
    });

    test('Clear search in Top Deals', async () => {
        const pagePromise = context.waitForEvent('page');
        await home.clickTopDealsLink();
        page2 = await pagePromise;
        topDeals = new topDealsPage(page2);
        
        await topDeals.waitForPageToLoad();
        
        // Search for product
        await topDeals.searchProduct('carrot');
        await page2.waitForTimeout(600);
        
        // Clear search
        await topDeals.clearSearch();
        await page2.waitForTimeout(600);
        
        // Verify more products are shown
        const products = await topDeals.getAllProductNames();
        expect(products.length).toBeGreaterThan(1);
    });

    test('Pagination - Navigate to next page', async () => {
        const pagePromise = context.waitForEvent('page');
        await home.clickTopDealsLink();
        page2 = await pagePromise;
        topDeals = new topDealsPage(page2);
        
        await topDeals.waitForPageToLoad();
        await topDeals.selectRowsPerPage('5');
        await page2.waitForTimeout(500);
        
        // Get products on first page
        let products1 = await topDeals.getAllProductNames();
        
        // Go to next page
        await topDeals.goToNextPage();
        await page2.waitForTimeout(600);
        
        // Get products on second page
        let products2 = await topDeals.getAllProductNames();
        
        // They should be different
        expect(JSON.stringify(products1)).not.toEqual(JSON.stringify(products2));
    });

    test('Pagination - Go to specific page number', async () => {
        const pagePromise = context.waitForEvent('page');
        await home.clickTopDealsLink();
        page2 = await pagePromise;
        topDeals = new topDealsPage(page2);
        
        await topDeals.waitForPageToLoad();
        
        // Go to page 2
        await topDeals.goToPageNumber(2);
        await page2.waitForTimeout(600);
        
        // Verify page 2 is selected (button should be highlighted or disabled)
        const nextEnabled = await topDeals.isNextPageButtonEnabled();
        expect(nextEnabled).toBeTruthy();
    });

    test('Pagination - First and Previous buttons disabled on first page', async () => {
        const pagePromise = context.waitForEvent('page');
        await home.clickTopDealsLink();
        page2 = await pagePromise;
        topDeals = new topDealsPage(page2);
        
        await topDeals.waitForPageToLoad();
        
        // On first page, First and Previous should be disabled
        expect(await topDeals.isFirstPageButtonEnabled()).toBeFalsy();
        expect(await topDeals.isPreviousPageButtonEnabled()).toBeFalsy();
    });

    test('Pagination - Last and Next buttons disabled on last page', async () => {
        const pagePromise = context.waitForEvent('page');
        await home.clickTopDealsLink();
        page2 = await pagePromise;
        topDeals = new topDealsPage(page2);
        
        await topDeals.waitForPageToLoad();
        
        // Go to last page
        await topDeals.goToLastPage();
        await page2.waitForTimeout(600);
        
        // Last and Next should be disabled
        expect(await topDealsPage.isLastPageButtonEnabled()).toBeFalsy();
        expect(await topDeals.isNextPageButtonEnabled()).toBeFalsy();
    });

    test('Get product details from offers page', async () => {
        const pagePromise = context.waitForEvent('page');
        await home.clickTopDealsLink();
        page2 = await pagePromise;
        topDeals = new topDealsPage(page2);
        
        await topDeals.waitForPageToLoad();
        
        // Get details of first product
        const product = await topDeals.getProductDetails(0);
        
        expect(product.name).toBeTruthy();
        expect(product.price).toBeTruthy();
        expect(product.discount).toBeTruthy();
    });

    test('Verify multiple products are displayed', async () => {
        const pagePromise = context.waitForEvent('page');
        await home.clickTopDealsLink();
        page2 = await pagePromise;
        topDeals = new topDealsPage(page2);
        
        await topDeals.waitForPageToLoad();
        
        // Get all products
        const products = await topDeals.getAllProductNames();
        
        expect(products.length).toBeGreaterThan(0);
    });
});
