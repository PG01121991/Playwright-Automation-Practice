class homePage {
    constructor(page) {
        this.page = page;
        this.searchBox = page.locator(".search-keyword");
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