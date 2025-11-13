const{test,expect}= require("@playwright/test");
const path = require("path");

test('iframes validation', async({page})=>{
    await page.goto("https://demoqa.com/frames");
    await page.screenshot({path:'screenshot.png'});
    const framelocator = page.frameLocator('#frame1');
    //element level screenshots can also be taken with the syntax page.locator().screenshot();
    expect(framelocator.getByText("This is a sample page", {exact: true})).toBeVisible();

})

test.only("Visual Comparision validation", async({page})=>{
   await page.goto("https://www.myntra.com/");
    expect(await page.screenshot()).toMatchSnapshot({path:'homepage.png'});
})