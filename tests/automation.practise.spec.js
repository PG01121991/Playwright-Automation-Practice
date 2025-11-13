const {test, expect} = require("@playwright/test")

test("Launch demo website and validate web elements", async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://demoqa.com/");
    await page.waitForLoadState("networkidle");
    await page.locator('h5:has-text("Elements")').click();
    console.log(page.url());
    //Textboxes
    await page.locator('span:has-text("Text Box")').click();
    await page.locator('#userName').fill("Poojitha Gorley");
    await page.locator('#userEmail').fill("test123@test.com");
    await page.locator('#currentAddress').fill("411, Park street, Great Avenue, NJ - 40919");
    await page.locator('#permanentAddress').fill("Same as above");
    await page.locator('#submit').click();
    //await page.pause();
    //Checkbox
    await page.locator('span:has-text("Check Box")').click();
    await page.locator('button[aria-label="Toggle"]').first().click();
    await page.locator('.rct-icon-expand-all').click();
    await page.locator('.rct-checkbox').nth(2).click();
    await page.locator('.rct-checkbox').nth(3).click();
    await expect(page.getByLabel('Notes', 'Commands', 'desktop')).toBeChecked();
    //console.log(await page.locator('#result'));
    await page.locator('.rct-checkbox').nth(3).click();
    await expect(page.getByLabel('Commands', 'desktop')).not.toBeChecked();
    //console.log(await page.locator('#result'));
    //await page.pause();
    //Radio Buttons
    await page.locator('span:has-text("Radio Button")').click();
    //await page.waitForLoadState("networkidle");
    await page.locator("label[for='yesRadio']").click();
    await page.locator('p:has-text("You have selected Yes")');
    await expect(page.locator("#yesRadio")).toBeEnabled();
    await expect(page.locator("#noRadio")).toBeDisabled();
    //web tables
    await page.locator('span:has-text("Web Tables")').click();
    await page.locator('#addNewRecordButton').click();
    await page.locator('#firstName').fill('TestFirstName');
    await page.locator('#lastName').fill('TestLastName');
    await page.locator('#userEmail').fill('test@test.com');
    await page.locator('#age').fill('40');
    await page.locator('#salary').fill('6500');
    await page.locator('#department').fill('Irrigation');
    await page.locator('#submit').click();
    //verify new row added in the web table
    await expect(page.getByText('TestFirstName', { exact: true })).toBeVisible();
    await expect(page.getByText('TestLastName', {exact: true})).toBeVisible();
    await expect(page.getByText('40', {exact: true})).toBeVisible();
    await expect(page.getByText('test@test.com', {exact: true})).toBeVisible();
    await expect(page.getByText('6500', {exact: true})).toBeVisible();
    await expect(page.getByText('Irrigation', {exact: true})).toBeVisible();
    await page.locator('span[title="Delete"]').nth(3).click();
    //Links that open in new tab
    await page.getByText('Links', { exact: true }).first().click();
    // Start waiting for new page before clicking. Note no await.
    const pagePromise = context.waitForEvent('page');
    await page.getByText('Home', { exact: true }).click();
    const newPage = await pagePromise;
    // Interact with the new page normally.
    console.log(await newPage.title());
})