const{test, expect} = require('@playwright/test');
const {homePage} = require('../pageObjects/homePage');
const {topDealsPage} = require('../pageObjects/topDealsPage');

test("@PO Launch the ekart URL", async({browser}) =>
   {
   const context = await browser.newContext();
   const page = await context.newPage();
   const home = new homePage(page);
   await home.launchUrl('https://rahulshettyacademy.com/seleniumPractise/#/');
   expect(await page.title("GreenKart - veg and fruits kart")).toBeTruthy();
})

test("@PO Test the 'search' option with the available product", async({browser}) =>{
   const item = 'carrot';
   const item2 = 'corn';
   const item3 = '    ';
   const context = await browser.newContext();
   const page = await context.newPage();
   const home = new homePage(page);
   await home.launchUrl('https://rahulshettyacademy.com/seleniumPractise/#/');
   expect(page.getByText('carrot - 1 Kg')).toBeVisible();
   expect(page.getByText('corn - 1 Kg')).toBeVisible();
})

test("@PO Test the 'search' option without the available product", async({browser}) =>{
   const item = 'cabbage';
   const context = await browser.newContext();
   const page = await context.newPage();
   const home = new homePage(page);
   await home.launchUrl('https://rahulshettyacademy.com/seleniumPractise/#/');
   await page.waitForLoadState('networkidle');
   await expect(home.noResults).toContainText('Sorry, no products matched your search!');
   await expect(home.noResults).toContainText('Enter a different keyword and try.');
   await page.screenshot({path:'noresultsfound.png'});
   //expect(await page.screenshot()).toMatchSnapshot('noresultsfound.png');
})

test("@PO Test Top deals page - verify the table rows are adjusted or not based on the rows count selection", async({browser}) => {
   const context = await browser.newContext();
   const page = await context.newPage();
   const home = new homePage(page);
   await home.launchUrl("https://rahulshettyacademy.com/seleniumPractise/#/");
   const topDealsPage = context.waitForEvent("page");
   await home.topDealsLink.click();
   const page2 = await topDealsPage;
   const topDealsScreen = new topDealsPage(page);
   //const pageDropDown = page2.locator('select#page-menu');
   await topDealsScreen.pageDropDown.selectOption("10");
   expect(topDealsScreen.tableRow).toHaveCount(11);//including header section.
   await topDealsScreen.pageDropDown.selectOption("20");
   expect(topDealsScreen.tableRow).toHaveCount(21);//including header section.
   await topDealsScreen.pageDropDown.selectOption("5");
   expect(topDealsScreen.tableRow).toHaveCount(6);//including header section.
})

test("@PO Search items in the top deals page", async({browser}) => {
   const item = "wheat";
   const item1 = "    ";
   const item2 = "carrot";
   const context = await browser.newContext();
   const page = await context.newPage();
   const home = new homePage(page);
   await home.launchUrl("https://rahulshettyacademy.com/seleniumPractise/#/");
   const topDealsPage = context.waitForEvent('page');
   await home.topDealsLink.click();
   const page2 = await topDealsPage;
   const topDealsScreen = new topDealsPage(page2);
   await topDealsScreen.searchProduct.fill(item);
   await expect(topDealsScreen.searchResult).toContainText('Wheat');
   await topDealsScreen.searchProduct.fill(item1);
   await topDealsScreen.searchProduct.fill(item2);
   await expect(topDealsScreen.searchResult).toContainText('Carrot');
})

test("Test the buttons on the top deals page", async({browser})=>{
   const context = await browser.newContext();
   const page = await context.newPage();
   await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/");
   const topDealsPage = context.waitForEvent('page');
   await page.locator(".cart-header-navlink[href='#/offers']").click();
   const page2 = await topDealsPage;
   await page2.locator('a:has-text("2")').click();
   await expect(page2.locator("a[aria-label='First']")).toBeEnabled();
   await expect(page2.locator("a[aria-label='Previous']")).toBeEnabled();
   await page2.locator('a:has-text("1")').click();
   await expect(page2.locator("a[aria-label='First']")).toBeDisabled();
   await expect(page2.locator("a[aria-label='Previous']")).toBeDisabled();
   await page2.locator('a:has-text("4")').click();
   await expect(page2.locator("a[aria-label='Next']")).toBeDisabled();
   await expect(page2.locator("a[aria-label='Last']")).toBeDisabled();
   await page2.locator('a:has-text("3")').click();
   await expect(page2.locator("a[aria-label='Next']")).toBeEnabled();
   await expect(page2.locator("a[aria-label='Last']")).toBeEnabled();
})

test("Test Adding the items to the cart", async({browser}) =>{
   const context = await browser.newContext();
   const page = await context.newPage();
   await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/");
   const products = page.locator('.product');
   await products.nth(7).getByText("ADD TO CART").click();
   await expect(page.locator('.added')).toHaveText("✔ ADDED");
   await products.nth(14).getByText("ADD TO CART").click();
   await products.nth(5).getByText("ADD TO CART").click();
   await products.nth(20).getByText("ADD TO CART").click();
   await expect(page.locator('.cart-info')).toHaveText('Items',':','4');
})

test("Test Removing the items from the cart", async({browser})=>{
   const context = await browser.newContext();
   const page = await context.newPage();
   await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/");
   const products = page.locator('.product');
   await products.nth(7).getByText("ADD TO CART").click();
   await expect(page.locator('.added')).toHaveText("✔ ADDED");
   await products.nth(14).getByText("ADD TO CART").click();
   await products.nth(5).getByText("ADD TO CART").click();
   await products.nth(20).getByText("ADD TO CART").click();
   await expect(page.locator('.cart-info')).toContainText('Items');
   await expect(page.locator('.cart-info')).toContainText('4');
   await page.locator('.cart-icon').click();
   //const cartItems = page.locator('.product-info');
   await page.locator('.product-remove').first().click();
   await page.locator('.product-remove').first().click();
   await page.locator('.product-remove').first().click();
   await expect(page.locator('.cart-info')).toContainText('Items');
   await expect(page.locator('.cart-info')).toContainText('1');
})

test("Test prices calculation of the items", async({browser})=>{
     const context = await browser.newContext();
   const page = await context.newPage();
   await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/");
   const products = page.locator('.product');
   await products.nth(7).getByText("+").click();
   await products.nth(7).getByText("+").click();
   await products.nth(7).getByText("+").click();
   await products.nth(7).getByText("+").click();
   await products.nth(7).getByText("ADD TO CART").click();
   await expect(page.locator('.added')).toHaveText("✔ ADDED");
   await expect(page.locator('.cart-info')).toContainText('Items');
   await expect(page.locator('.cart-info')).toContainText('1');
   await expect(page.locator('.cart-info')).toContainText('Price');
   //product price * stepper Input
   await expect(page.locator('.cart-info')).toContainText('1');
})

test("@Web Test to Upload a file", async({browser}) => {
   const context = await browser.newContext();
   const page = await context.newPage();
   //Navigate to the page with file input
   await page.goto('https://demoqa.com/upload-download');
   //Locate file input element
   const fileInput = page.locator('#uploadFile');
   //set the file path to upload
   const filePath =('testData/sampleupload file.xlsx');
   await fileInput.setInputFiles(filePath);
   //check if the file is uploaded or not
   await expect(page.locator('#uploadedFilePath')).toBeVisible();
})