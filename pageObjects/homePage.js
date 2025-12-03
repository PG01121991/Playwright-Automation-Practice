class homePage {
    constructor(page) {
        this.page = page;
        this.searchBox = page.locator(".search-keyword");
        this.noResults = page.locator('.no-results');
        this.topDealsLink = page.locator(".cart-header-navlink[href='#/offers']");
    }
    async launchUrl(url) {
        await this.page.goto(url);
    }

    async searchItem(item) {
        await this.searchBox.click();
        await this.searchBox.fill(item);
    }
    
}
module.exports = {homePage};