const { test, expect } = require('@playwright/test');

test('validate mouse hover functionality', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await page.locator('#mousehover').hover();
    expect(await page.locator('.mouse-hover-content').isVisible()).toBeTruthy();
    expect(await page.locator('text=Top').isVisible()).toBeTruthy();
    expect(await page.locator('text=Reload').isVisible()).toBeTruthy();
    //on the click of top it should scroll to top
    await page.locator('text=Top').click();
    await expect(page.getByRole('heading', { name: 'Practice Page' })).toBeVisible(); // Additional action to verify scroll to top if needed
    await page.locator('#mousehover').hover();
    await page.locator('text=Reload').click();
    await expect(page).toHaveURL('https://rahulshettyacademy.com/AutomationPractice/'); // Verify page reload
    await context.close();
});