const {test, expect} = require('@playwright/test');
const { automationPractise } = require('../../pageObjects/automationPractise.pom.js');


test('Validate New Tab Functionality', async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await page.getByText('Open Tab').click();
    const page2 = await context.waitForEvent('page');
    await page2.waitForLoadState("networkidle");
    const text = await page2.title();
    console.log(text);
    expect(text).toBe('QAClick Academy - A Testing Academy to Learn, Earn and Shine');
});