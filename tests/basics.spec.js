const {test, expect} = require('@playwright/test')

test('basic test', async ({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.makemytrip.com/");
    console.log(await page.title());
    //Title validation
    await expect(page).toHaveTitle("MakeMyTrip - #1 Travel Website 50% OFF on Hotels, Flights & Holiday");
    //Modal Validation
    await expect(page.locator("//div[@class='style__LoginRegularSaverWrapper-sc-1ioaggt-0 ugrWM']//img")).toBeVisible();
    await page.locator('span.commonModal__close').click();
    //Navigate to Hotels page
    await page.locator('span.chNavIcon.appendBottom2.chSprite.chHotels.inactive').click();
    console.log(await page.url());
    await expect(page).toHaveURL('https://www.makemytrip.com/hotels/');
    //scroll down
    // Scrolls automatically so that button is visible
    await expect(page.getByRole('link', { name: 'Puri Hotels,' })).toBeVisible();
    await page.getByRole('link', { name: 'Puri Hotels,' }).click();
    console.log(await page.title());
    console.log(await page.url());
})