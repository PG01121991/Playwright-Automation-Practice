const {test} = require("@playwright/test")

test("Automate e2e product purchase flow", async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    const products = await page.locator(".card-body");
    const productName = 'iphone 13 pro';
    const count = await products.count();
    await page.goto("https://rahulshettyacademy.com/client/auth/login");
    //Login with the registered account
    await page.locator("#userEmail").fill("jyothi4.priya@gmail.com");
    await page.locator("#userPassword").fill("Testing@123");
    await page.locator("#login").click();
    await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);
    for(let i = 0; i < count; ++i)
    {
        if(await products.nth(i).locator("b").textContent() === productName)
        {
            //await products.nth(i).locator("text = Add To Cart").click();
            await page.getByRole('button', { name: 'Add To Cart' }).nth(i).click()
            break;
        }
    }
    await page.pause();
    

});