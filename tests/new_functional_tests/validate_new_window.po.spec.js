const {test, expect} = require('@playwright/test');
const { automationPractise } = require('../../pageObjects/automationPractise.pom.js');


test('validate the content on the new window', async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await page.locator('#openwindow').click();
    const page2 = await context.waitForEvent('page');
    await page2.waitForLoadState("networkidle");
    const text = await page2.title();
    console.log(text);
    expect(text).toBe('QA Click Academy | Selenium,Jmeter,SoapUI,Appium,Database testing,QA Training Academy');
});