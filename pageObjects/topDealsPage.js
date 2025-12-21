class topDealsPage {
    constructor(page,page2) {
        this.page = page;
        this.page2 = page2;
        this.pageDropDown = page2.locator('select#page-menu');
        this.searchProduct = page2.locator('#search-field');
        this.tableRow = page2.locator('tr');
        this.searchResult = page2.locator('td').nth(0);
    }


}
module.exports = {topDealsPage};