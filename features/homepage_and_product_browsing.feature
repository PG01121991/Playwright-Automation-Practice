
Feature: Homepage and Product Browsing

 Scenario: Verify homepage loads with all products
    # 1. Navigate to https://rahulshettyacademy.com/seleniumPractise/#/
    Given The user navigates to the GreenKart homepage
    # 2. Wait for the page to fully load
    When The homepage loads
    # 3. Verify GreenKart header is visible
    Then The user should see the GreenKart header
    # 4. Verify search box is visible
        And The user should see the search box
    # 5. Verify cart link with counter showing 0 items is displayed
        And The user should see the cart link with counter showing 0 items
    # 6. Verify at least 20 products are displayed in the product grid
        And The user should see at least 20 products displayed in the product grid

   Scenario: Verify product card details
    Given The user navigates to the GreenKart homepage
    When The user locate the first product in the product grid
    Then The user should see the product image
        And The user should see the product name
        And The user should see the product price
        And The user should see quantity controls (-, quantity input, +)
        And The user should see the ADD TO CART button