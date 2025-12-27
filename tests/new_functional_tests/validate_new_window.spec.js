const {test, expect} = require('@playwright/test');
test('validate the content on the new window', async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await page.locator('#openwindow').click();
    const page2 = await context.waitForEvent('page');
    await page2.waitForLoadState("networkidle");
    await page2.locator('a:has-text("COURSES")').click();
    const courseTitle = await page2.locator('.course-title h2').textContent();
    expect(courseTitle).toBe('Courses');
});