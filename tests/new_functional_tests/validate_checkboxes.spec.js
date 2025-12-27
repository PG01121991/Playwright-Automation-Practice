const {test, expect} = require('@playwright/test');
test('Validate checkboxes functionality', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    const checkboxes = page.locator('input[type="checkbox"]');
    const checkboxCount = await checkboxes.count();
    expect(checkboxCount).toBe(3);
    for(let i=0; i<checkboxCount; i++){
        const checkbox = checkboxes.nth(i);
        await checkbox.check();
        expect(await checkbox.isChecked()).toBeTruthy();
        await checkbox.uncheck();
        expect(await checkbox.isChecked()).toBeFalsy();
    }
});