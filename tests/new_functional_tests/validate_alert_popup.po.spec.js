const {test, expect} = require('@playwright/test');
const { automationPractise } = require('../../pageObjects/automationPractise.pom.js');

test('Validate Alert Popup', async ({browser}) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  const ap = new automationPractise(page);
  await ap.launchAutomationPractisePage('https://rahulshettyacademy.com/AutomationPractice/');
  await ap.alertTextBox.fill(' Vihaana ');
  await ap.alertButton.click();
  page.on('dialog', dialog => {
    expect(dialog.message()).toBe('Hello , share this practice page and share your knowledge');
    dialog.accept();
    });
});

test('Validate Confirm Popup', async ({browser}) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  const ap = new automationPractise(page);
  await ap.launchAutomationPractisePage('https://rahulshettyacademy.com/AutomationPractice/');
  await ap.alertTextBox.fill(' Vihaana ');
  await ap.confirmButton.click();
  page.on('dialog', async dialog => {
    expect(dialog.message()).toBe('Hello Vihaana, Are you sure you want to confirm?');
    dialog.dismiss();
    await automationPractise.confirmButton.click();
    page.on('dialog', dialog => {
        dialog.accept();
    });
  });
})
