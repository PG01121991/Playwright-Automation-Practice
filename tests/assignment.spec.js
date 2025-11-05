const {test, expect} = require('@playwright/test')

test.only('Automation Assignment one', async ({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    const dropdown = page.locator(".custom-select.ng-untouched.ng-pristine.ng-valid")
    const products = page.locator(".card-body b");
    //Launching the website
    await page.goto("https://rahulshettyacademy.com/client/auth/login");
    //Navigating to Register page
    await expect(page.locator(".text-reset")).toBeVisible();
    await page.locator(".text-reset").click();
    await expect(page.locator(".login-title")).toHaveText("Register");
    //Filling the Register form
    await page.locator("#firstName").fill("Jyothi");
    await page.locator("#lastName").fill("Priya");
    await page.locator("#userEmail").fill("jyothi12.priya@gmail.com");
    await page.locator("#userMobile").fill("7845742916");
    await dropdown.selectOption("Engineer");
    await page.locator("input[value='Female']").click();
    await page.locator("#userPassword").fill("Testing@123");
    await page.locator("#confirmPassword").fill("Testing@123");
    await page.locator("input[type='checkbox']").check(" I am 18 year or Older ");
    await page.locator("input[value=Register]").click();
    //Account Registration validation
    await expect(page.locator(".headcolor")).toHaveText("Account Created Successfully");
    //Login with the registered account
    await page.locator(".btn.btn-primary").click();
    await page.locator("#userEmail").fill("jyothi12.priya@gmail.com");
    await page.locator("#userPassword").fill("Testing@123");
    await page.locator("#login").click();
    //await page.pause();
    //Navigated to home page & printing the products
    expect(await page.locator("div[class='left mt-1'] h3")).toHaveText("Automation");
    console.log(await products.first().textContent());
    console.log(await products.last().textContent());
    console.log(await products.nth(1).textContent());
});