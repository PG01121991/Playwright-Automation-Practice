const {test, expect } = require('@playwright/test');
const { automationPractise } = require('../../pageObjects/automationPractise.pom.js');

test('Validate dynamic drop down', async ({browser})=> {
    const context = await browser.newContext();
    const page = await context.newPage();
    const ap = new automationPractise(page);
    await ap.launchAutomationPractisePage('https://rahulshettyacademy.com/AutomationPractice/');
    await ap.selectDynamicDropDownOption('India');
    expect( await ap.dropDown.inputValue()).toBe('India');
});

test('Validate static dropdown', async ({browser})=> {
    const context = await browser.newContext();
    const page = await context.newPage();
    const ap = new automationPractise(page);
    await ap.launchAutomationPractisePage('https://rahulshettyacademy.com/AutomationPractice/');
    const staticDropdown = ap.staticDropDown;
    await staticDropdown.selectOption('option2');
    expect(await staticDropdown.inputValue()).toBe('option2');
    await ap.selectStaticDropDownOption();
});