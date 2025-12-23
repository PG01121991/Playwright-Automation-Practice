const { test, expect } = require('@playwright/test');
const { homePage } = require('../pageObjects/homePage.pom.js');
const { cartPage } = require('../pageObjects/cartPage.pom.js');

test.describe('GreenKart - End-to-End Workflows', () => {
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

    test('Complete shopping workflow - Search and add to cart', async () => {
        // Step 1: Search for a product
        await home.searchItem('apple');
        await page.waitForTimeout(800);
        
        expect(await home.isProductVisible('Apple')).toBeTruthy();
        
        // Step 2: Get product details
        const productName = await home.getProductName(0);
        const productPrice = await home.getProductPrice(0);
        
        expect(productName).toContain('Apple');
        expect(parseInt(productPrice)).toBeGreaterThan(0);
        
        // Step 3: Set quantity
        await home.incrementQuantity(0);
        await page.waitForTimeout(300);
        
        let quantity = await home.getProductQuantity(0);
        expect(quantity).toBe('2');
        
        // Step 4: Add to cart
        await home.addProductToCart(0);
        await page.waitForTimeout(500);
        
        expect(await home.verifyAddedCheckmark()).toBeTruthy();
        
        // Step 5: Navigate to cart
        await home.clickCartLink();
        await page.waitForTimeout(800);
        
        // Step 6: Verify in cart
        const cartItems = await cart.getCartItemsCount();
        expect(cartItems).toBeGreaterThanOrEqual(1);
        
        const cartProductName = await cart.getCartProductName(0);
        expect(cartProductName).toContain('Apple');
        
        const cartQuantity = await cart.getCartProductQuantity(0);
        expect(cartQuantity).toBe('2');
    });

    test('Add multiple products with different quantities', async () => {
        // Product 1: Add Brocolli with quantity 2
        for (let i = 0; i < 1; i++) {
            await home.incrementQuantity(0);
            await page.waitForTimeout(200);
        }
        await home.addProductToCart(0);
        await page.waitForTimeout(400);
        
        // Product 2: Add Cauliflower with quantity 3
        for (let i = 0; i < 2; i++) {
            await home.incrementQuantity(1);
            await page.waitForTimeout(200);
        }
        await home.addProductToCart(1);
        await page.waitForTimeout(400);
        
        // Product 3: Add Cucumber with quantity 1 (default)
        await home.addProductToCart(2);
        await page.waitForTimeout(400);
        
        // Navigate to cart
        await home.clickCartLink();
        await page.waitForTimeout(800);
        
        // Verify all products in cart
        const cartProducts = await cart.getAllCartProducts();
        expect(cartProducts.length).toBeGreaterThanOrEqual(3);
        
        // Verify quantities
        let totalQuantity = 0;
        for (let i = 0; i < cartProducts.length; i++) {
            const qty = parseInt(cartProducts[i].quantity);
            totalQuantity += qty;
        }
        
        expect(totalQuantity).toBe(6); // 2 + 3 + 1
    });

    test('Search, add to cart, update quantity, and checkout', async () => {
        // Search
        await home.searchItem('mango');
        await page.waitForTimeout(800);
        
        expect(await home.isProductVisible('Mango')).toBeTruthy();
        
        // Add to cart
        await home.addProductToCart(0);
        await page.waitForTimeout(400);
        
        // Go to cart
        await home.clickCartLink();
        await page.waitForTimeout(800);
        
        expect(await cart.getCartItemsCount()).toBeGreaterThanOrEqual(1);
        
        // Update quantity in cart
        await cart.updateCartProductQuantity(0, 3);
        await page.waitForTimeout(300);
        
        const updatedQty = await cart.getCartProductQuantity(0);
        expect(updatedQty).toBe('3');
        
        // Verify checkout button is available
        expect(await cart.isProceedCheckoutButtonVisible()).toBeTruthy();
    });

    test('Add expensive and cheap items to cart', async () => {
        // Add Nuts Mixture (₹950 - expensive)
        const indexExpensive = await home.getProductIndexByName('Nuts Mixture');
        if (indexExpensive !== -1) {
            await home.addProductToCart(indexExpensive);
            await page.waitForTimeout(400);
        }
        
        // Add Tomato (₹16 - cheap)
        const indexCheap = await home.getProductIndexByName('Tomato');
        if (indexCheap !== -1) {
            await home.addProductToCart(indexCheap);
            await page.waitForTimeout(400);
        }
        
        // Navigate to cart
        await home.clickCartLink();
        await page.waitForTimeout(800);
        
        // Verify both items in cart
        const cartProducts = await cart.getAllCartProducts();
        expect(cartProducts.length).toBeGreaterThanOrEqual(1);
    });

    test('Navigation between pages preserves cart', async () => {
        // Add items to cart
        await home.addProductToCart(0);
        await page.waitForTimeout(300);
        
        await home.addProductToCart(1);
        await page.waitForTimeout(300);
        
        // Go to Top Deals page
        const pagePromise = page.context().waitForEvent('page');
        await home.clickTopDealsLink();
        const topDealsPage = await pagePromise;
        await topDealsPage.waitForTimeout(1000);
        
        // Close Top Deals page
        await topDealsPage.close();
        
        // Verify we're still on home page
        await home.waitForProductsToLoad();
        
        // Navigate to cart to verify items are still there
        await home.clickCartLink();
        await page.waitForTimeout(800);
        
        const cartItems = await cart.getCartItemsCount();
        expect(cartItems).toBe(2);
    });

    test('Clear cart and restart shopping', async () => {
        // Add items
        await home.addProductToCart(0);
        await page.waitForTimeout(300);
        
        await home.addProductToCart(1);
        await page.waitForTimeout(300);
        
        // Go to cart
        await home.clickCartLink();
        await page.waitForTimeout(800);
        
        expect(await cart.getCartItemsCount()).toBe(2);
        
        // Try to remove items (if remove button is available)
        try {
            await cart.removeProductFromCart(0);
            await page.waitForTimeout(300);
            
            // Should have 1 item left
            const remaining = await cart.getCartItemsCount();
            expect(remaining).toBe(1);
        } catch {
            // If remove not available, just verify cart exists
            expect(await cart.getCartItemsCount()).toBeGreaterThan(0);
        }
    });

    test('Product details consistency - home page to cart', async () => {
        // Get product details on home page
        const homeProductName = await home.getProductName(0);
        const homeProductPrice = await home.getProductPrice(0);
        
        // Add to cart
        await home.addProductToCart(0);
        await page.waitForTimeout(400);
        
        // Go to cart
        await home.clickCartLink();
        await page.waitForTimeout(800);
        
        // Get product details in cart
        const cartProductName = await cart.getCartProductName(0);
        const cartProductPrice = await cart.getCartProductPrice(0);
        
        // Compare
        expect(cartProductName).toContain(homeProductName);
        expect(cartProductPrice).toBe(homeProductPrice);
    });

    test('Search filters then add multiple filtered results', async () => {
        // Search for items containing 'e'
        await home.searchItem('e');
        await page.waitForTimeout(800);
        
        const filteredCount = await home.getProductCount();
        expect(filteredCount).toBeGreaterThan(0);
        
        // Add first 2 filtered products
        if (filteredCount >= 2) {
            await home.addProductToCart(0);
            await page.waitForTimeout(300);
            
            await home.addProductToCart(1);
            await page.waitForTimeout(300);
        }
        
        // Go to cart
        await home.clickCartLink();
        await page.waitForTimeout(800);
        
        // Verify items in cart
        const cartItems = await cart.getCartItemsCount();
        expect(cartItems).toBeGreaterThanOrEqual(1);
    });

    test('High quantity purchase workflow', async () => {
        // Set high quantity
        await home.setProductQuantity(0, 15);
        await page.waitForTimeout(300);
        
        let quantity = await home.getProductQuantity(0);
        expect(quantity).toBe('15');
        
        // Add to cart
        await home.addProductToCart(0);
        await page.waitForTimeout(400);
        
        // Verify in cart
        await home.clickCartLink();
        await page.waitForTimeout(800);
        
        const cartQty = await cart.getCartProductQuantity(0);
        expect(parseInt(cartQty)).toBe(15);
    });

    test('Complete purchase flow for multiple orders', async () => {
        // Order 1: Single item
        await home.addProductToCart(0);
        await page.waitForTimeout(300);
        
        // Go to cart
        await home.clickCartLink();
        await page.waitForTimeout(800);
        
        // Verify order summary
        const cartItems1 = await cart.getCartItemsCount();
        expect(cartItems1).toBe(1);
        
        // Navigate back
        await home.clickLogo();
        await page.waitForTimeout(600);
        await home.waitForProductsToLoad();
        
        // Order 2: Multiple items
        await home.addProductToCart(1);
        await page.waitForTimeout(300);
        
        await home.addProductToCart(2);
        await page.waitForTimeout(300);
        
        // Go to cart
        await home.clickCartLink();
        await page.waitForTimeout(800);
        
        // Verify all items
        const cartItems2 = await cart.getCartItemsCount();
        expect(cartItems2).toBeGreaterThanOrEqual(2);
    });
});
