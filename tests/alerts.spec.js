const{test, expect} = require("@playwright/test")

test("Validate various types of Alerts", async({page})=>{
    await page.goto("https://demoqa.com/alerts");
    await page.locator('#alertButton').click();
    page.on('dialog',dialog=>dialog.accept());
    //confirmation alert
    await page.locator('#confirmButton').click();
    page.on('confirmationdialog', confirmationdialog => dialog.accept());
    //dismiss alert
    await page.locator('#confirmButton').click();
    page.on('confirmationdialog', confirmationdialog => dialog.dismiss());
    //PromptButton
    await page.locator('#promtButton').click();
    page.on('promptdialog', promptdialog => dialog.fill("Hello World"));
    await page.pause();
    page.on('promptdialog', promptdialog => dialog.accept());
})