const {test, expect } = require('@playwright/test');
const { automationPractise } = require('../../pageObjects/automationPractise.pom.js');

test('Validate dynamic drop down', async ({browser})=> {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await page.locator('#autocomplete').pressSequentially('ind');
    const dropdown_options = page.locator("#ui-id-1");
    await dropdown_options.waitFor("Visible");
    const optionsCount = await dropdown_options.locator('li').count();
    for(let i=0; i<optionsCount; i++){
        const optionText = await dropdown_options.locator('li').nth(i).textContent();
        if(optionText==='India'){
            await dropdown_options.locator('li').nth(i).click();
            break;
        }
    }
    expect( await page.locator('#autocomplete').inputValue()).toBe('India');
});

test('Validate static dropdown', async ({browser})=> {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    const staticDropdown = page.locator('#dropdown-class-example');
    await staticDropdown.selectOption('option2');
    expect(await staticDropdown.inputValue()).toBe('option2');
    for(let i=1; i<=3; i++){
        await staticDropdown.selectOption(`option${i}`);
        expect(await staticDropdown.inputValue()).toBe(`option${i}`);
    }
});