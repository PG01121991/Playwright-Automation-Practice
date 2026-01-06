const {test, expect} = require('@playwright/test');
const { automationPractise } = require('../../pageObjects/automationPractise.pom.js');


test('Validate Hide and Show Element', async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await page.locator('#displayed-text').fill('Testing Hide and Show');
    await page.locator('#hide-textbox').click();
    await expect(page.locator('#displayed-text')).toBeHidden();
    await page.locator('#show-textbox').click();
    await expect(page.locator('#displayed-text')).toBeVisible();
});