/**
 * ========================================
 * GreenKart E-Commerce Test Suite
 * Page Object Model (POM) with Playwright
 * ========================================
 * 
 * This test suite provides comprehensive automated testing for the GreenKart e-commerce application
 * using Playwright and JavaScript with the Page Object Model (POM) design pattern.
 * 
 * PROJECT STRUCTURE:
 * ==================
 * 
 * /pageObjects/
 *   ├── homePage.js          - Home page locators and methods
 *   ├── cartPage.js          - Shopping cart page locators and methods
 *   └── topDealsPage.js      - Top Deals/Offers page locators and methods
 * 
 * /tests/
 *   ├── homepage-tests.spec.js       - Homepage and product browsing tests
 *   ├── search-tests.spec.js         - Product search functionality tests
 *   ├── quantity-tests.spec.js       - Quantity management tests
 *   ├── cart-tests.spec.js           - Shopping cart operation tests
 *   ├── price-tests.spec.js          - Price and currency display tests
 *   ├── topdeals-tests.spec.js       - Top Deals/Offers page tests
 *   ├── navigation-tests.spec.js     - Navigation and UI elements tests
 *   └── end-to-end-tests.spec.js     - Complete user workflows
 * 
 * TOTAL TEST COVERAGE:
 * =====================
 * 
 * Homepage & Products:        8 tests
 * Search Functionality:       10 tests
 * Quantity Management:        10 tests
 * Shopping Cart:              12 tests
 * Price & Currency:           9 tests
 * Top Deals/Offers:           12 tests
 * Navigation & UI:            13 tests
 * End-to-End Workflows:       10 tests
 * 
 * TOTAL: 84+ Automated Test Cases
 * 
 * 
 * PAGE OBJECT MODEL DETAILS:
 * ==========================
 * 
 * 1. homePage.js
 *    - Search functionality (search, clear)
 *    - Product management (get count, price, quantity)
 *    - Cart operations (add, navigate)
 *    - Navigation (Top Deals, Flight Booking)
 * 
 * 2. cartPage.js
 *    - Cart status (empty/items)
 *    - Product management in cart (get, update, remove)
 *    - Quantity controls in cart
 *    - Checkout operations
 * 
 * 3. topDealsPage.js
 *    - Search on offers page
 *    - Pagination controls
 *    - Row selection dropdown
 *    - Product details retrieval
 * 
 * 
 * HOW TO RUN TESTS:
 * =================
 * 
 * 1. Install dependencies (if not already done):
 *    npm install @playwright/test
 * 
 * 2. Run all tests:
 *    npx playwright test
 * 
 * 3. Run specific test file:
 *    npx playwright test tests/homepage-tests.spec.js
 * 
 * 4. Run tests with specific tag:
 *    npx playwright test --grep "@PO"
 * 
 * 5. Run in headed mode (see browser):
 *    npx playwright test --headed
 * 
 * 6. Run in debug mode:
 *    npx playwright test --debug
 * 
 * 7. Generate HTML report:
 *    npx playwright test
 *    npx playwright show-report
 * 
 * 8. Run tests in specific browser:
 *    npx playwright test --project=chromium
 *    npx playwright test --project=firefox
 *    npx playwright test --project=webkit
 * 
 * 
 * TEST DESCRIPTIONS:
 * ==================
 * 
 * HOMEPAGE TESTS (homepage-tests.spec.js)
 * ----------------------------------------
 * ✓ Verify homepage loads with all products
 * ✓ Verify product card details
 * ✓ Verify products are displayed in correct order
 * ✓ Verify rupee symbol is displayed in prices
 * ✓ Verify cart counter displays items correctly
 * ✓ Verify top deals link is visible and clickable
 * ✓ Verify flight booking link is visible
 * ✓ Verify all product elements are accessible
 * 
 * SEARCH TESTS (search-tests.spec.js)
 * ------------------------------------
 * ✓ Search for a vegetable by name - Apple
 * ✓ Search for a vegetable by name - Tomato
 * ✓ Search for fruit by partial name - berry
 * ✓ Search with no matching results
 * ✓ Clear search to show all products again
 * ✓ Search is case insensitive
 * ✓ Search maintains search term in box
 * ✓ Search with multiple characters
 * ✓ Search for nuts item
 * ✓ Search clears and shows all products
 * 
 * QUANTITY TESTS (quantity-tests.spec.js)
 * ----------------------------------------
 * ✓ Verify default quantity is 1 for all products
 * ✓ Increment quantity using + button
 * ✓ Increment quantity multiple times
 * ✓ Decrement quantity using - button
 * ✓ Decrement quantity multiple times
 * ✓ Quantity cannot go below 1 when decrementing
 * ✓ Directly edit quantity in input field
 * ✓ Set high quantity directly
 * ✓ Quantity updates correctly after multiple increments and decrements
 * ✓ Quantity management works on different products
 * ✓ Quantity can be set to large number
 * 
 * CART TESTS (cart-tests.spec.js)
 * --------------------------------
 * ✓ Add single item to cart
 * ✓ Add multiple different items to cart
 * ✓ Add same item multiple times increases quantity
 * ✓ Add item with custom quantity to cart
 * ✓ View empty cart
 * ✓ View cart with multiple items
 * ✓ Update quantity in cart
 * ✓ Proceed to checkout button is visible
 * ✓ Remove item from cart
 * ✓ Add item by product name
 * ✓ Cart updates correctly after navigation
 * 
 * PRICE TESTS (price-tests.spec.js)
 * ----------------------------------
 * ✓ Verify rupee symbol is displayed on all product prices
 * ✓ Verify all product prices are numeric
 * ✓ Verify cart price counter updates when adding items
 * ✓ Verify price calculation for single product
 * ✓ Verify price calculation for item with custom quantity
 * ✓ Verify multiple items price calculation
 * ✓ Verify price format is consistent across pages
 * ✓ Verify specific product prices
 * ✓ Verify cart shows correct total for multiple items with quantities
 * 
 * TOPDEALS TESTS (topdeals-tests.spec.js)
 * ----------------------------------------
 * ✓ Navigate to Top Deals page
 * ✓ Verify table rows adjust based on dropdown selection - 5 rows
 * ✓ Verify table rows adjust based on dropdown selection - 10 rows
 * ✓ Verify table rows adjust based on dropdown selection - 20 rows
 * ✓ Search for product in Top Deals page
 * ✓ Search for carrot in Top Deals
 * ✓ Clear search in Top Deals
 * ✓ Pagination - Navigate to next page
 * ✓ Pagination - Go to specific page number
 * ✓ Pagination - First and Previous buttons disabled on first page
 * ✓ Pagination - Last and Next buttons disabled on last page
 * ✓ Get product details from offers page
 * ✓ Verify multiple products are displayed
 * 
 * NAVIGATION TESTS (navigation-tests.spec.js)
 * -------------------------------------------
 * ✓ Verify all navigation menu items are visible
 * ✓ Verify GreenKart logo is visible and clickable
 * ✓ Click logo returns to homepage
 * ✓ Click Top Deals navigates to offers page
 * ✓ Cart link is accessible from any product state
 * ✓ Search box is always accessible
 * ✓ Flight Booking link opens in new tab
 * ✓ Course link is visible and clickable
 * ✓ Verify page title is correct
 * ✓ Navigation works after search
 * ✓ Navigation works after adding to cart
 * ✓ Multiple navigation actions work sequentially
 * ✓ Header elements remain visible on all pages
 * ✓ Cart counter is visible on homepage
 * 
 * END-TO-END TESTS (end-to-end-tests.spec.js)
 * -------------------------------------------
 * ✓ Complete shopping workflow - Search and add to cart
 * ✓ Add multiple products with different quantities
 * ✓ Search, add to cart, update quantity, and checkout
 * ✓ Add expensive and cheap items to cart
 * ✓ Navigation between pages preserves cart
 * ✓ Clear cart and restart shopping
 * ✓ Product details consistency - home page to cart
 * ✓ Search filters then add multiple filtered results
 * ✓ High quantity purchase workflow
 * ✓ Complete purchase flow for multiple orders
 * 
 * 
 * BEST PRACTICES FOLLOWED:
 * =========================
 * 
 * 1. Page Object Model (POM) Pattern
 *    - Separation of concerns (locators vs. tests)
 *    - Reusable methods for common actions
 *    - Easy maintenance and updates
 * 
 * 2. Async/Await
 *    - Clean and readable code
 *    - Better error handling
 * 
 * 3. Proper Waits
 *    - Explicit waits for elements
 *    - Timeout handling
 * 
 * 4. Clear Test Names
 *    - Descriptive test titles
 *    - Easy to understand test purpose
 * 
 * 5. Test Organization
 *    - Grouped by feature/functionality
 *    - Logical test flow
 * 
 * 6. Data Independence
 *    - Tests can run in any order
 *    - No dependency between tests
 * 
 * 7. Assertions
 *    - Clear and specific assertions
 *    - Meaningful error messages
 * 
 * 
 * COMMON ISSUES AND SOLUTIONS:
 * =============================
 * 
 * Issue: Tests timing out
 * Solution: Increase timeout in playwright.config.js
 *          timeout: 60000 (for 60 seconds)
 * 
 * Issue: Element not found
 * Solution: Check if selectors are correct
 *          Use --debug mode to inspect elements
 *          Update locators in page objects if UI changed
 * 
 * Issue: Tests failing on slow network
 * Solution: Increase wait times
 *          Use waitForLoadState() for better waits
 *          Check browser logs for errors
 * 
 * Issue: Test passing locally but failing in CI
 * Solution: Use headless mode
 *          Check environment variables
 *          Verify URL accessibility
 *          Check for dynamic content loading
 * 
 * 
 * EXTENDING THE TEST SUITE:
 * ==========================
 * 
 * To add new tests:
 * 
 * 1. Identify the page object needed (create if not exists)
 * 2. Add necessary locators to the page object
 * 3. Add test methods for the new feature
 * 4. Create a new test file following naming convention
 * 5. Follow the existing test structure and patterns
 * 
 * Example:
 * 
 * // In pageObjects/myPage.js
 * class myPage {
 *     constructor(page) {
 *         this.page = page;
 *         this.myElement = page.locator('.my-element');
 *     }
 *     
 *     async myAction() {
 *         await this.myElement.click();
 *     }
 * }
 * 
 * // In tests/my-feature-tests.spec.js
 * test('My new test', async ({ browser }) => {
 *     const context = await browser.newContext();
 *     const page = await context.newPage();
 *     const myPageObj = new myPage(page);
 *     
 *     // Test implementation
 * });
 * 
 * 
 * PERFORMANCE TIPS:
 * ==================
 * 
 * 1. Run tests in parallel:
 *    npx playwright test --workers=4
 * 
 * 2. Run only failed tests:
 *    npx playwright test --last-failed
 * 
 * 3. Run tests with filtering:
 *    npx playwright test -g "search"
 * 
 * 4. Use beforeEach/afterEach hooks efficiently
 * 
 * 5. Reuse page context when possible
 * 
 * 
 * DEBUGGING:
 * ===========
 * 
 * 1. Enable debug mode:
 *    PWDEBUG=1 npx playwright test
 * 
 * 2. Use page.screenshot():
 *    await page.screenshot({ path: 'debug.png' });
 * 
 * 3. Use page.pause():
 *    await page.pause();
 * 
 * 4. Check console logs:
 *    page.on('console', msg => console.log(msg.text()));
 * 
 * 5. View HTML report:
 *    npx playwright show-report
 * 
 * 
 * SUPPORT:
 * =========
 * 
 * For issues or questions:
 * - Check Playwright documentation: https://playwright.dev
 * - Review existing tests for patterns
 * - Enable debug mode for detailed logs
 * - Check application console for errors
 * 
 * ========================================
 */

module.exports = {
    description: 'GreenKart E-Commerce Test Suite Documentation'
};
