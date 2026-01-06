/**
 * Automation Practise Page Object Model
 * Encapsulates all locators and interactions for the Automation Practise page
 */
const { expect } = require('@playwright/test');

class automationPractise {
    constructor(page) {
        this.page = page;
        // Page Elements
        this.radioButtons = page.locator('input[type="radio"]');
        this.dropDown = page.locator('#autocomplete');
        this.dropDownOptions = page.locator('#ui-id-1');
        this.textBox = page.locator('#autocomplete');
        this.staticDropDown = page.locator('#dropdown-class-example');
        this.checkBoxes = page.locator('input[type="checkbox"]');
        this.openWindowButton = page.locator('#openwindow');
        this.openTabButton = page.getByText('Open Tab');
        this.alertTextBox = page.locator('#name');
        this.alertButton = page.locator('#alertbtn');
        this.confirmButton = page.locator('#confirmbtn');
        this.textBoxHideShow = page.locator('#displayed-text');
        this.hideTextBoxButton = page.locator('#hide-textbox');
        this.showTextBoxButton = page.locator('#show-textbox');
        this.webTable = page.locator('.table-display');
        this.fixedWebTable = page.locator('.tableFixHead');
        this.mouseHoverButton = page.locator('#mousehover');
        this.mouseHoverContent = page.locator('.mouse-hover-content');
        this.topOPtion = page.locator('text=Top');
        this.reloadOption = page.locator('text=Reload');
        this.heading = page.getByRole('heading', { name: 'Practice Page' });
        this.iframe = page.frameLocator('#courses-iframe');
    }
    
    async launchAutomationPractisePage(url) {
        await this.page.goto(url);
    }

    async isAllRadioButtonsWorking() {
        const radioCount = await this.radioButtons.count();
        for(let i=0; i<radioCount; i++){
                const radio = this.radioButtons.nth(i);
                await radio.click();
                expect(await radio.isChecked()).toBeTruthy();
            }
    }

    async isAllCheckboxesWorking() {
        const checkboxCount = await this.checkBoxes.count();
        for(let i=0; i<checkboxCount; i++){
                const checkbox = this.checkBoxes.nth(i);
                await checkbox.check();
                expect(await checkbox.isChecked()).toBeTruthy();
                await checkbox.uncheck();
                expect(await checkbox.isChecked()).toBeFalsy();
            }
    }

    async selectDynamicDropDownOption(optionText) 
    {
        await this.textBox.pressSequentially(optionText);
        await this.dropDownOptions.waitFor("Visible");
        const optionsCount = await this.dropDownOptions.locator('li').count();
        for(let i=0; i<optionsCount; i++)
        {
        const optionText = await this.dropDownOptions.locator('li').nth(i).textContent();
        if(optionText==='India')
            {
            await this.dropDownOptions.locator('li').nth(i).click();
            break;
            }
        }
    }

    async selectStaticDropDownOption() {
        for(let i=1; i<=3; i++){
                await this.staticDropDown.selectOption(`option${i}`);
                expect(await this.staticDropDown.inputValue()).toBe(`option${i}`);
            }
    }
}
module.exports = { automationPractise };