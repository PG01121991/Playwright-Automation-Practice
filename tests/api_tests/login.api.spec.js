const { test, expect, request } = require('@playwright/test');

const registerPayLoad = {
    firstName: "poojitha",
    lastName: "gorley",
    userEmail: "jhonnyjab@gmail.com",
    userRole: "customer",
    occupation: "Engineer",
    gender: "Female",
    userMobile: "7848742919",
    userPassword: "test@123Q",
    confirmPassword: "test@123Q",
    required: true
};

const loginPayLoad = {userEmail:"jhonnyjab@gmail.com",userPassword:"test@123Q"};
const invalidloginPayLoad = {userEmail:"poojitha.gorley@gmail.com",userPassword:"dfsdfds"};
let token;
test('@APITest Test with valid login credentials', async ({ request }) => {
    const loginResponse = await request.post("https://rahulshettyacademy.com/api/ecom/auth/login", {
        data: loginPayLoad
    });
    
    expect(loginResponse.status()).toBe(200);
    const responseBody = await loginResponse.json();
    const token = await responseBody.token;
    console.log('Token:', token);
    console.log('Response:', responseBody);
});

test('@APITest Test with invalid login credentials', async ({request})=>{
    const loginResponse = await request.post("https://rahulshettyacademy.com/api/ecom/auth/login", {
        data: invalidloginPayLoad
    });
    expect(loginResponse.status()).toBe(400);
    const responseBody2 = await loginResponse.json();
    const message = await responseBody2.message;
    expect(message).toBe("Incorrect email or password.");
})

test('@APITest Validate login with expired token', async({ request }) => {
    const expiredToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTRlOGFkNWM5NDE2NDZiN2E2NjhhYmEiLCJ1c2VyRW1haWwiOiJqaG9ubnlqYWJAZ21haWwuY29tIiwidXNlck1vYmlsZSI6Nzg0ODc0MjkxOSwidXNlclJvbGUiOiJjdXN0b21lciIsImlhdCI6MTc2Njc1ODM3MywiZXhwIjoxNzk4MzE1OTczfQ.UIldBWqZpE9HX1pcocC27aR6zBe7t6kgqzvsY1JH8sA";
    
    const validateResponse = await request.post("https://rahulshettyacademy.com/api/ecom/auth/validateToken", {
        headers: {
            'Authorization': expiredToken
        }
    });
    
    expect(validateResponse.status()).toBe(404);
    const responseText = await validateResponse.text();
    console.log('Response for expired token validation:', responseText);
    //expect(responseText).toContain("Cannot GET");
});