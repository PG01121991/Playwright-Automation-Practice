const {test, expect} = require('@playwright/test');

test('Validate Alert Popup', async ({browser}) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
  await page.locator('#name').fill(' Vihaana ');
  await page.locator('#alertbtn').click();
  page.on('dialog', dialog => {
    expect(dialog.message()).toBe('Hello , share this practice page and share your knowledge');
    dialog.accept();
    });
});

test('Validate Confirm Popup', async ({browser}) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
  await page.locator('#name').fill(' Vihaana ');
  await page.locator('#confirmbtn').click();
  page.on('dialog', async dialog => {
    expect(dialog.message()).toBe('Hello Vihaana, Are you sure you want to confirm?');
    dialog.dismiss();
    await page.locator('#confirmbtn').click();
    page.on('dialog', dialog => {
        dialog.accept();
    });
  });
})
