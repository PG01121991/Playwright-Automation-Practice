const {test, expect, request } = require('@playwright/test');

test('Test to get order history', async ({ request }) => {
    const response = await request.get("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/694e8ad5c941646b7a668aba");
    expect(response.status()).toBe(304);
    const responseBody = await response.json();
    console.log('Order History Response:', responseBody);
});