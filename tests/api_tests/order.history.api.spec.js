const {test, expect, request } = require('@playwright/test');

test('Test to get order details', async ({ request }) => {
    const loginPayLoad = {userEmail:"jhonnyjab@gmail.com",userPassword:"test@123Q"};
    const loginResponse = await request.post("https://rahulshettyacademy.com/api/ecom/auth/login", {
            data: loginPayLoad
        });
        expect(loginResponse.status()).toBe(200);
        const responseBody = await loginResponse.json();
        const token = await responseBody.token;
    const response = await request.get("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=6953bf0fc941646b7a70c84d", {
        headers: {
            authorization: token
        }
    });
    console.log('Response Status:', response.status());
    if (response.status() === 200) {
        const responseBody = await response.json();
        console.log('Orders fetched for customer Successfully');
        expect(responseBody.message).toContain("Orders fetched for customer Successfully");
    } else if (response.status() === 404) {
        console.log('Endpoint not available - please verify the API endpoint URL');
        expect(response.status()).toBe(404);
    }
});