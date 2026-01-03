const {test, expect} = require('@playwright/test');

test('validate web table functionality', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await page.locator('.table-display').waitFor();
    
    // Extract all table data at once using page evaluation
    const tableData = await page.evaluate(() => {
        const rows = document.querySelectorAll('.table-display tbody tr');
        const data = [];
        rows.forEach(row => {
            const cells = row.querySelectorAll('td');
            if (cells.length > 0) {
                data.push({
                    instructor: cells[0]?.innerText.trim(),
                    course: cells[1]?.innerText.trim(),
                    price: parseInt(cells[2]?.innerText.trim())
                });
            }
        });
        return data;
    });
    
    // Display rows
    tableData.forEach(row => {
        console.log(`${row.instructor}\t${row.course}\t${row.price}`);
    });
    
    // Validate table has data
    console.log(`Number of rows: ${tableData.length}`);
    
    //validate specific column allow only integer values
    tableData.forEach(row => {
        expect(Number.isInteger(row.price)).toBeTruthy();
    });
    
    //list out the courses having price less than 30
    tableData.forEach(row => {
        if (row.price < 30) {
            console.log(`Course with price less than 30: ${row.course} - Price: ${row.price}`);
        }
    });
});

test('validate fixed web table functionality', async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await page.locator('.tableFixHead').waitFor();
    
    // Extract all table data at once using page evaluation
    const tableData = await page.evaluate(() => {
        const rows = document.querySelectorAll('.tableFixHead tbody tr');
        const data = [];
        let total = 0;
        rows.forEach(row => {
            const amount = parseInt(row.querySelectorAll('td')[3]?.innerText.trim());
            if (!isNaN(amount)) {
                data.push(amount);
                total += amount;
            }
        });
        return { amounts: data, calculatedTotal: total };
    });
    
    console.log(`Calculated total: ${tableData.calculatedTotal}`);
    const totalText = await page.locator('.totalAmount').innerText();
    const totalValue = parseInt(totalText.split(':')[1].trim());
    console.log(`Displayed total: ${totalValue}`);
    expect(tableData.calculatedTotal).toBe(totalValue);
});