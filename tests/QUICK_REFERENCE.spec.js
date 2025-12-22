/**
 * ====================================
 * QUICK REFERENCE GUIDE
 * GreenKart Test Suite
 * ====================================
 */

// ========== RUNNING TESTS ==========

// Run all tests
// npx playwright test

// Run specific test file
// npx playwright test tests/homepage-tests.spec.js

// Run in headed mode (see browser)
// npx playwright test --headed

// Run in debug mode (interactive)
// npx playwright test --debug

// Run with UI mode (visual debugging)
// npx playwright test --ui

// Run single test
// npx playwright test tests/homepage-tests.spec.js -g "Verify homepage loads"

// ========== PAGE OBJECTS USAGE ==========

// homePage.js - Main shopping page
// -----------
// const home = new homePage(page);
// 
// await home.launchUrl(url);                    // Load application
// await home.searchItem('apple');               // Search for product
// const count = await home.getProductCount();   // Get number of products
// const name = await home.getProductName(0);    // Get product name by index
// const price = await home.getProductPrice(0);  // Get product price
// await home.addProductToCart(0);               // Add product to cart
// await home.incrementQuantity(0);              // Increase quantity
// await home.decrementQuantity(0);              // Decrease quantity
// await home.clickCartLink();                   // Navigate to cart

// cartPage.js - Shopping cart
// -----------
// const cart = new cartPage(page);
// 
// const isEmpty = await cart.isCartEmpty();                    // Check if empty
// const count = await cart.getCartItemsCount();                // Count items
// const name = await cart.getCartProductName(0);               // Get product name
// const qty = await cart.getCartProductQuantity(0);            // Get quantity
// await cart.updateCartProductQuantity(0, 5);                  // Update quantity
// const price = await cart.getCartProductPrice(0);             // Get product price
// await cart.removeProductFromCart(0);                         // Remove product
// await cart.clickProceedToCheckout();                         // Proceed to checkout

// topDealsPage.js - Offers page
// ----------------
// const topDeals = new topDealsPage(page);
// 
// await topDeals.waitForPageToLoad();                          // Wait for page
// await topDeals.searchProduct('carrot');                      // Search in offers
// await topDeals.selectRowsPerPage('10');                      // Select rows dropdown
// const rows = await topDeals.getDisplayedRowsCount();         // Get row count
// await topDeals.goToNextPage();                               // Next page
// const products = await topDeals.getAllProductNames();        // Get all products

// ========== ASSERTIONS EXAMPLES ==========

// expect(value).toBeTruthy();                   // True assertion
// expect(value).toBeFalsy();                    // False assertion
// expect(value).toBe('exact value');            // Exact match
// expect(value).toContain('partial');           // Contains text
// expect(value).toEqual({ key: 'value' });      // Deep equality
// expect(value).toBeGreaterThan(5);             // Greater than
// expect(value).toBeLessThan(10);               // Less than
// expect(array).toHaveLength(3);                // Array length
// expect(string).toMatch(/pattern/);            // Regex match

// ========== COMMON WAIT PATTERNS ==========

// Wait for element to be visible
// await element.waitFor({ state: 'visible' });

// Wait for load to complete
// await page.waitForLoadState('networkidle');

// Wait for specific timeout
// await page.waitForTimeout(1000);  // 1 second

// Wait for navigation
// await page.waitForNavigation();

// Wait for response
// await page.waitForResponse(response => response.url().includes('/api'));

// ========== TEST STRUCTURE TEMPLATE ==========

/*
test.describe('Feature Name', () => {
    let page;
    let pageObject;

    test.beforeEach(async ({ browser }) => {
        const context = await browser.newContext();
        page = await context.newPage();
        pageObject = new PageObject(page);
        await pageObject.launchUrl(url);
    });

    test('Test description', async () => {
        // Arrange
        
        // Act
        
        // Assert
        expect(result).toBeTruthy();
    });
});
*/

// ========== SELECTOR EXAMPLES ==========

// CSS selector
// page.locator('.class-name')
// page.locator('#id-name')
// page.locator('button:has-text("Click me")')
// page.locator('input[type="number"]')

// XPath selector
// page.locator('//div[@class="product"]')
// page.locator('//button[text()="Add"]')

// Text content
// page.getByText('exact text')
// page.getByText(/partial text/)

// Role selectors
// page.getByRole('button', { name: 'Submit' })
// page.getByRole('textbox', { name: 'Email' })

// ========== ERROR HANDLING ==========

// Try-catch for optional elements
// try {
//     await element.click();
// } catch (error) {
//     console.log('Element not found, continuing');
// }

// Check if element exists
// const exists = await element.isVisible();
// if (exists) { ... }

// Get element count
// const count = await element.count();
// if (count > 0) { ... }

// ========== DEBUGGING TECHNIQUES ==========

// Take screenshot
// await page.screenshot({ path: 'screenshot.png' });

// Pause execution
// await page.pause();

// Print to console
// console.log('Value:', variableName);

// Get element text
// const text = await element.textContent();
// console.log('Text:', text);

// Get input value
// const value = await input.inputValue();
// console.log('Input value:', value);

// List all properties
// const innerHTML = await element.innerHTML();
// console.log('HTML:', innerHTML);

// ========== PERFORMANCE OPTIMIZATION ==========

// Run tests in parallel (in playwright.config.js)
// use: {
//     workers: 4  // Run 4 tests at same time
// }

// Run tests sequentially
// npx playwright test --workers=1

// Run only failed tests from last run
// npx playwright test --last-failed

// Filter tests by name
// npx playwright test -g "pattern"

// Skip slow tests
// test.skip('Slow test', async () => { ... });

// Mark as slow (increases timeout)
// test('Slow operation', async () => { ... });
// test.slow();

// ========== CI/CD INTEGRATION ==========

// GitHub Actions example:
/*
name: Tests
on: [push]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '16'
      - run: npm install
      - run: npx playwright install
      - run: npm test
*/

// ========== USEFUL COMMANDS ==========

// Install Playwright
// npm install @playwright/test

// Install browsers
// npx playwright install

// Generate test report
// npx playwright test
// npx playwright show-report

// Update snapshots
// npx playwright test --update-snapshots

// View test results
// npx playwright show-report

// List all available tests
// npx playwright test --list

// ========== CONFIGURATION ==========

// In playwright.config.js:
// 
// module.exports = {
//   testDir: './tests',
//   fullyParallel: true,
//   forbidOnly: !!process.env.CI,
//   retries: process.env.CI ? 2 : 0,
//   workers: process.env.CI ? 1 : undefined,
//   timeout: 30000,
//   expect: { timeout: 5000 },
//   use: { 
//     baseURL: 'https://example.com',
//     actionTimeout: 10000
//   }
// };

// ========== TEST DATA PATTERNS ==========

// Constants
const APP_URL = 'https://rahulshettyacademy.com/seleniumPractise/#/';

// Test data objects
const testProducts = {
    apple: { name: 'Apple', price: 72 },
    tomato: { name: 'Tomato', price: 16 }
};

// Parameterized tests
// test.describe.configure({ mode: 'parallel' });
// for (const product of testProducts) {
//     test(`Add ${product.name}`, async () => { ... });
// }

// ========== FIXTURES ==========

// Create reusable fixtures:
/*
test.extend({
    authenticatedPage: async ({ page }, use) => {
        await page.goto(APP_URL);
        await use(page);
    }
});

test('Use fixture', async ({ authenticatedPage }) => {
    // authenticatedPage is pre-loaded
});
*/

module.exports = {
    description: 'Quick Reference Guide for GreenKart Tests'
};
