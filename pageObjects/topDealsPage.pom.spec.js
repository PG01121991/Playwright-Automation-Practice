/**
 * Top Deals Page Object Model
 * Encapsulates all locators and interactions for the Top Deals/Offers page
 */
class topDealsPage {
    constructor(page) {
        this.page = page;
        
        // Page Elements
        this.pageTitle = page.locator('h1');
        this.searchField = page.locator('#search-field');
        this.pageDropDown = page.locator('select#page-menu');
        
        // Table Elements
        this.tableRows = page.locator('tr');
        this.tableHeader = page.locator('th');
        this.tableData = page.locator('td');
        
        // Pagination
        this.paginationButtons = page.locator('[aria-label]');
        this.firstPageButton = page.locator('a[aria-label="First"]');
        this.lastPageButton = page.locator('a[aria-label="Last"]');
        this.nextPageButton = page.locator('a[aria-label="Next"]');
        this.previousPageButton = page.locator('a[aria-label="Previous"]');
        this.pageNumbers = page.locator('a:has-text(/^[0-9]+$/)');
        
        // Products in table
        this.productRows = page.locator('tbody tr');
        this.productNames = page.locator('td').nth(0);
        this.productPrices = page.locator('td').nth(3);
        this.discountPercentage = page.locator('td').nth(4);
        
        // Search results
        this.searchResult = page.locator('td').nth(0);
    }

    /**
     * Wait for page to load
     */
    async waitForPageToLoad() {
        await this.pageTitle.waitFor({ state: 'visible' });
        await this.pageDropDown.waitFor({ state: 'visible' });
    }

    /**
     * Search for a product in Top Deals
     */
    async searchProduct(productName) {
        await this.searchField.click();
        await this.searchField.clear();
        await this.searchField.fill(productName);
        await this.page.waitForTimeout(500);
    }

    /**
     * Clear search field
     */
    async clearSearch() {
        await this.searchField.clear();
        await this.page.waitForTimeout(500);
    }

    /**
     * Select rows per page from dropdown
     */
    async selectRowsPerPage(rowCount) {
        await this.pageDropDown.selectOption(rowCount.toString());
        await this.page.waitForTimeout(500);
    }

    /**
     * Get current selected rows per page
     */
    async getSelectedRowsPerPage() {
        return await this.pageDropDown.inputValue();
    }

    /**
     * Get number of rows displayed (excluding header)
     */
    async getDisplayedRowsCount() {
        const totalRows = await this.tableRows.count();
        return totalRows - 1; // Subtract 1 for header row
    }

    /**
     * Go to first page
     */
    async goToFirstPage() {
        await this.firstPageButton.click();
        await this.page.waitForTimeout(500);
    }

    /**
     * Go to last page
     */
    async goToLastPage() {
        await this.lastPageButton.click();
        await this.page.waitForTimeout(500);
    }

    /**
     * Go to next page
     */
    async goToNextPage() {
        await this.nextPageButton.click();
        await this.page.waitForTimeout(500);
    }

    /**
     * Go to previous page
     */
    async goToPreviousPage() {
        await this.previousPageButton.click();
        await this.page.waitForTimeout(500);
    }

    /**
     * Go to specific page number
     */
    async goToPageNumber(pageNumber) {
        const pageBtn = this.page.locator(`a:has-text("${pageNumber}")`);
        await pageBtn.click();
        await this.page.waitForTimeout(500);
    }

    /**
     * Check if first page button is enabled
     */
    async isFirstPageButtonEnabled() {
        return !await this.firstPageButton.isDisabled();
    }

    /**
     * Check if last page button is enabled
     */
    async isLastPageButtonEnabled() {
        return !await this.lastPageButton.isDisabled();
    }

    /**
     * Check if next page button is enabled
     */
    async isNextPageButtonEnabled() {
        return !await this.nextPageButton.isDisabled();
    }

    /**
     * Check if previous page button is enabled
     */
    async isPreviousPageButtonEnabled() {
        return !await this.previousPageButton.isDisabled();
    }

    /**
     * Get all product names in current page
     */
    async getAllProductNames() {
        const count = await this.productRows.count();
        const names = [];
        
        for (let i = 0; i < count; i++) {
            const name = await this.productRows.nth(i).locator('td').nth(0).textContent();
            names.push(name);
        }
        
        return names;
    }

    /**
     * Get product details by row index
     */
    async getProductDetails(rowIndex) {
        const row = this.productRows.nth(rowIndex);
        return {
            name: await row.locator('td').nth(0).textContent(),
            price: await row.locator('td').nth(3).textContent(),
            discount: await row.locator('td').nth(4).textContent()
        };
    }

    /**
     * Verify if product exists in search results
     */
    async verifyProductInResults(productName) {
        const products = await this.getAllProductNames();
        return products.some(name => name.includes(productName));
    }

    /**
     * Get search result text
     */
    async getSearchResultText() {
        return await this.searchResult.textContent();
    }
}

module.exports = { topDealsPage };
