const {test, expect} = require('@playwright/test');
const { automationPractise } = require('../../pageObjects/automationPractise.pom.js');


test('Validate checkboxes functionality', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const ap = new automationPractise(page);
    await ap.launchAutomationPractisePage('https://rahulshettyacademy.com/AutomationPractice/');
    const checkboxes = ap.checkBoxes;
    const checkboxCount = await checkboxes.count();
    expect(checkboxCount).toBe(3);
    await ap.isAllCheckboxesWorking();
});