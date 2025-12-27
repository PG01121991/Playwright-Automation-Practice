const {test, expect } = require('@playwright/test');
test('Validate radio buttons', async ({browser})=> {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    const radioButtons = page.locator('input[type="radio"]');
    const radioCount = await radioButtons.count();
    expect(radioCount).toBe(3);
    for(let i=0; i<radioCount; i++){
        const radio = radioButtons.nth(i);
        await radio.click();
        expect(await radio.isChecked()).toBeTruthy();
    }
});