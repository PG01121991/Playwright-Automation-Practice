/**
 * Cart Page Object Model
 * Encapsulates all locators and interactions for the shopping cart page
 */
class cartPage {
    constructor(page) {
        this.page = page;
        
        // Cart Elements
        this.emptyCartImage = page.locator("img[alt='empty-cart']");
        this.emptyCartMessage = page.locator('h2');
        this.proceedCheckoutButton = page.locator('button:has-text("PROCEED TO CHECKOUT")');
        this.cartItemsContainer = page.locator('.product-info');
        
        // Product items in cart
        this.cartProducts = page.locator('.product-info');
        this.productNames = page.locator('.product-name');
        this.productQuantities = page.locator('input[type="number"]');
        this.productPrices = page.locator('.product-price');
        this.productRemoveButtons = page.locator('.product-remove');
        
        // Summary information
        this.subtotalAmount = page.locator('.summary-amount');
        this.totalAmount = page.locator('.total-amount');
    }

    /**
     * Check if cart is empty
     */
    async isCartEmpty() {
        return await this.emptyCartMessage.isVisible();
    }

    /**
     * Get empty cart message text
     */
    async getEmptyCartMessage() {
        return await this.emptyCartMessage.textContent();
    }

    /**
     * Get number of items in cart
     */
    async getCartItemsCount() {
        return await this.cartProducts.count();
    }

    /**
     * Get product name from cart by index
     */
    async getCartProductName(index) {
        // Try different selectors based on actual structure
        let productName;
        try {
            productName = await this.cartProducts.nth(index).locator('h4').textContent();
        } catch {
            productName = await this.cartProducts.nth(index).locator('.product-name').textContent();
        }
        return productName;
    }

    /**
     * Get product quantity from cart by index
     */
    async getCartProductQuantity(index) {
        const quantityInput = this.cartProducts.nth(index).locator('input[type="number"]');
        return await quantityInput.inputValue();
    }

    /**
     * Update product quantity in cart by index
     */
    async updateCartProductQuantity(index, quantity) {
        const quantityInput = this.cartProducts.nth(index).locator('input[type="number"]');
        await quantityInput.clear();
        await quantityInput.fill(quantity.toString());
    }

    /**
     * Get product price from cart by index
     */
    async getCartProductPrice(index) {
        const priceText = await this.cartProducts.nth(index).locator('p').first().textContent();
        return priceText.replace('₹', '').trim();
    }

    /**
     * Remove product from cart by index
     */
    async removeProductFromCart(index) {
        const removeButton = this.cartProducts.nth(index).locator("button:has-text('-')")
            .or(this.cartProducts.nth(index).locator('a:has-text("-")'));
        await removeButton.click();
    }

    /**
     * Remove product from cart by using remove button
     */
    async removeCartItem(index) {
        if (this.productRemoveButtons.count() > index) {
            await this.productRemoveButtons.nth(index).click();
        }
    }

    /**
     * Click Proceed to Checkout button
     */
    async clickProceedToCheckout() {
        await this.proceedCheckoutButton.click();
    }

    /**
     * Verify if Proceed to Checkout button is visible
     */
    async isProceedCheckoutButtonVisible() {
        return await this.proceedCheckoutButton.isVisible();
    }

    /**
     * Get cart summary text (items and total price)
     */
    async getCartSummary() {
        return await this.page.locator('.summary-section').textContent();
    }

    /**
     * Get all product details from cart
     */
    async getAllCartProducts() {
        const count = await this.getCartItemsCount();
        const products = [];
        
        for (let i = 0; i < count; i++) {
            products.push({
                name: await this.getCartProductName(i),
                quantity: await this.getCartProductQuantity(i),
                price: await this.getCartProductPrice(i)
            });
        }
        
        return products;
    }

    /**
     * Increment quantity for product in cart by index
     */
    async incrementCartProductQuantity(index) {
        const incrementButton = this.cartProducts.nth(index).locator("a:has-text('+')");
        await incrementButton.click();
    }

    /**
     * Decrement quantity for product in cart by index
     */
    async decrementCartProductQuantity(index) {
        const decrementButton = this.cartProducts.nth(index).locator("a:has-text('-')");
        await decrementButton.click();
    }
}

module.exports = { cartPage };
