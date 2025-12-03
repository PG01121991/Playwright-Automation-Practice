const{test, expect} = require('@playwright/test')

test.only("Launch the ekart URL", async({browser})=>{
   const browser = await browser.newContext();
   const page = await browser.newPage();
   await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/");
   console.log(await page.title());
})