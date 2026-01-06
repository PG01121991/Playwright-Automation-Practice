const {test, expect} = require('@playwright/test');
const { automationPractise } = require('../../pageObjects/automationPractise.pom.js');


test('validate web table functionality', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    const framelocator = page.frameLocator('#courses-iframe');
    console.log(await framelocator.locator('h2').first().textContent());
    console.log(await framelocator.locator('h2').last().textContent());
});