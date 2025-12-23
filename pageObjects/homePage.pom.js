/**
 * Enhanced Home Page Object Model
 * Encapsulates all locators and interactions for the GreenKart home page
 */
class homePage {
    constructor(page) {
        this.page = page;
        
        // Header and Navigation
        this.headerLogo = page.locator('.logo');
        this.searchBox = page.locator('.search-keyword');
        this.searchButton = page.locator('.search-button');
        this.cartLink = page.locator('.cart-icon');
        this.cartCounter = page.locator('.cart-info');
        
        // Navigation Links
        this.courseLink = page.locator('.cart-header-navlink[href*="rahulshettyacademy.com"]').first();
        this.topDealsLink = page.locator(".cart-header-navlink[href='#/offers']");
        this.flightBookingLink = page.locator(".cart-header-navlink[href*='dropdownsPractise']");
        
        // Products
        this.productGrid = page.locator('.products');
        this.productCards = page.locator('.product');
        this.addToCartButtons = page.locator("button:has-text('ADD TO CART')");
        this.addedCheckmark = page.locator('.added');
        
        // Search Results
        this.noResults = page.locator('.no-results');
        this.searchResultsMessage = page.locator('.products');
        
        // Cart info display
        this.itemsCount = page.locator('.cart-info >> text=Items');
        this.priceTotal = page.locator('.cart-info >> text=Price');
    }

    async launchUrl(url) {
        await this.page.goto(url);
        await this.page.waitForLoadState('networkidle');
    }

    async searchItem(item) {
        await this.searchBox.click();
        await this.searchBox.fill(item);
        await this.page.waitForTimeout(500);
    }

    async clearSearch() {
        await this.searchBox.clear();
        await this.page.waitForTimeout(500);
    }

    async getProductCount() {
        return await this.productCards.count();
    }

    async getProductName(index) {
        const heading = this.productCards.nth(index).locator('h4');
        return await heading.textContent();
    }

    async getProductPrice(index) {
        const priceText = await this.productCards.nth(index).locator('p').first().textContent();
        return priceText.replace('₹', '').trim();
    }

    async getProductQuantity(index) {
        const quantityInput = this.productCards.nth(index).locator('input[type="number"]');
        return await quantityInput.inputValue();
    }

    async setProductQuantity(index, quantity) {
        const quantityInput = this.productCards.nth(index).locator('input[type="number"]');
        await quantityInput.clear();
        await quantityInput.fill(quantity.toString());
    }

    async incrementQuantity(index) {
        const incrementButton = this.productCards.nth(index).locator("a:has-text('+')");
        await incrementButton.click();
    }

    async decrementQuantity(index) {
        const decrementButton = this.productCards.nth(index).locator("a:has-text('-')");
        await decrementButton.click();
    }

    async addProductToCart(index) {
        const addButton = this.productCards.nth(index).locator("button:has-text('ADD TO CART')");
        await addButton.click();
    }

    async addProductToCartByName(productName) {
        const productIndex = await this.getProductIndexByName(productName);
        await this.addProductToCart(productIndex);
    }

    async getProductIndexByName(productName) {
        const count = await this.getProductCount();
        for (let i = 0; i < count; i++) {
            const name = await this.getProductName(i);
            if (name.includes(productName)) {
                return i;
            }
        }
        return -1;
    }

    async clickCartLink() {
        await this.cartLink.click();
    }

    async clickTopDealsLink() {
        const topDealsLink = this.page.locator(".cart-header-navlink[href='#/offers']");
        await topDealsLink.click();
    }

    async getCartCounterText() {
        const fullText = await this.cartCounter.textContent();
        // Extract number from "Items:X" format
        const match = fullText.match(/Items:(\d+)/);
        return match ? parseInt(match[1]) : 0;
    }

    async verifyAddedCheckmark() {
        return await this.addedCheckmark.isVisible();
    }

    async isProductVisible(productName) {
        const product = this.page.locator(`h4:has-text('${productName}')`);
        return await product.isVisible();
    }

    async verifyNoResultsMessage() {
        return await this.noResults.isVisible();
    }

    async getPageTitle() {
        return await this.page.title();
    }

    async waitForProductsToLoad() {
        await this.page.waitForSelector('.products .product');
    }

    async clickLogo() {
        await this.headerLogo.click();
    }

    async isProductImageVisible(index) {
        const productImage = this.productCards.nth(index).locator('img').first();
        return await productImage.isVisible();
    }

    async isAddToCartButtonVisible(index) {
        const addButton = this.productCards.nth(index).locator("button:has-text('ADD TO CART')");
        return await addButton.isVisible();
    }
}

module.exports = { homePage };