# GreenKart E-commerce Test Plan

## Application Overview

GreenKart is a web-based e-commerce application for purchasing vegetables and fruits online. The application features a product catalog, search functionality, shopping cart management, quantity adjustment, and order checkout. This test plan covers all major user journeys including browsing products, searching, adding items to cart, managing quantities, viewing offers, and checkout processes.

## Test Scenarios

### 1. Homepage and Product Browsing

**Seed:** `tests/seed.spec.ts`

#### 1.1. Verify homepage loads with all products

**File:** `tests/homepage/verify-homepage-loads.spec.ts`

**Steps:**
  1. Navigate to https://rahulshettyacademy.com/seleniumPractise/#/
  2. Wait for the page to fully load
  3. Verify GreenKart header is visible
  4. Verify the search box is visible
  5. Verify cart link with counter showing 0 items is displayed
  6. Verify at least 20 products are displayed in the product grid

**Expected Results:**
  - Homepage loads successfully
  - GreenKart branding is prominently displayed
  - All interactive elements are accessible
  - Product grid displays vegetables and fruits with images, names, and prices
  - Cart counter shows 0 items initially

#### 1.2. Verify product card details

**File:** `tests/homepage/verify-product-card-details.spec.ts`

**Steps:**
  1. Navigate to the homepage
  2. Locate the first product (Brocolli)
  3. Verify the product image is displayed
  4. Verify the product name is shown
  5. Verify the price is displayed with rupee symbol (₹)
  6. Verify quantity controls (-, quantity input, +) are present
  7. Verify ADD TO CART button is present

**Expected Results:**
  - All product card elements are properly displayed
  - Product pricing is clearly visible
  - Quantity controls are functional and accessible
  - ADD TO CART button is ready for interaction

#### 1.3. Verify products are displayed in correct order

**File:** `tests/homepage/verify-product-order.spec.ts`

**Steps:**
  1. Navigate to the homepage
  2. Note the order of first 5 products: Brocolli, Cauliflower, Cucumber, Beetroot, Carrot
  3. Scroll down to verify more products are loaded
  4. Verify product names match expected vegetables and fruits list

**Expected Results:**
  - Products are displayed in a consistent order
  - No duplicate products in the first view
  - All product categories (vegetables, fruits, nuts) are present

### 2. Product Search Functionality

**Seed:** `tests/seed.spec.ts`

#### 2.1. Search for a vegetable by name

**File:** `tests/search/search-vegetable.spec.ts`

**Steps:**
  1. Navigate to the homepage
  2. Click on the search box
  3. Type 'apple' in the search field
  4. Wait for search results to update
  5. Verify only Apple product is displayed

**Expected Results:**
  - Search box accepts text input
  - Results filter dynamically as user types
  - Only matching products are shown (Apple - 1 Kg)
  - Other products are hidden

#### 2.2. Search for fruit by partial name

**File:** `tests/search/search-partial-name.spec.ts`

**Steps:**
  1. Navigate to the homepage
  2. Click on the search box
  3. Type 'berry' in the search field
  4. Verify products matching 'berry' appear (Strawberry, Raspberry)
  5. Clear the search box and verify all products reappear

**Expected Results:**
  - Partial search works and shows all matching items
  - Case sensitivity is not an issue
  - Products reappear when search is cleared

#### 2.3. Search with no matching results

**File:** `tests/search/search-no-results.spec.ts`

**Steps:**
  1. Navigate to the homepage
  2. Click on the search box
  3. Type a non-existent product like 'xyz123'
  4. Wait for search results to update

**Expected Results:**
  - No products are displayed for invalid search
  - User is not shown an error message or empty results are clearly indicated
  - Search box retains the search term

#### 2.4. Clear search to show all products again

**File:** `tests/search/search-clear.spec.ts`

**Steps:**
  1. Navigate to the homepage
  2. Search for a product (e.g., 'tomato')
  3. Verify results are filtered
  4. Clear the search box completely
  5. Wait for products to reload

**Expected Results:**
  - All original products are displayed again
  - Cart counter and other elements remain unchanged
  - Search functionality can be reset

### 3. Shopping Cart - Add Items

**Seed:** `tests/seed.spec.ts`

#### 3.1. Add single item to cart

**File:** `tests/cart/add-single-item.spec.ts`

**Steps:**
  1. Navigate to the homepage
  2. Click ADD TO CART button for Brocolli (first product)
  3. Verify the item is added
  4. Click on the Cart link

**Expected Results:**
  - ADD TO CART action completes successfully
  - Cart counter updates to reflect the added item
  - Cart page displays the added product with correct name and price

#### 3.2. Add multiple different items to cart

**File:** `tests/cart/add-multiple-items.spec.ts`

**Steps:**
  1. Navigate to the homepage
  2. Click ADD TO CART for Brocolli
  3. Click ADD TO CART for Cauliflower
  4. Click ADD TO CART for Tomato
  5. Click on the Cart link
  6. Verify all three items are in the cart

**Expected Results:**
  - All items are successfully added
  - Cart counter shows 3 items
  - Cart page displays all three products with their details

#### 3.3. Add same item multiple times

**File:** `tests/cart/add-duplicate-items.spec.ts`

**Steps:**
  1. Navigate to the homepage
  2. Click ADD TO CART for Apple
  3. Click ADD TO CART for Apple again
  4. Click on the Cart link

**Expected Results:**
  - Both additions are recorded in the cart
  - Cart shows quantity of 2 for Apple
  - Cart counter reflects the total quantity

#### 3.4. Add item with custom quantity

**File:** `tests/cart/add-custom-quantity.spec.ts`

**Steps:**
  1. Navigate to the homepage
  2. For any product, click the + button 3 times to set quantity to 4
  3. Click ADD TO CART
  4. Verify cart counter increases by 4

**Expected Results:**
  - Quantity can be increased before adding to cart
  - The correct quantity is reflected in the cart counter

### 4. Quantity Management

**Seed:** `tests/seed.spec.ts`

#### 4.1. Increment quantity using + button

**File:** `tests/quantity/increment-quantity.spec.ts`

**Steps:**
  1. Navigate to the homepage
  2. Locate any product (e.g., Apple)
  3. Verify default quantity is 1
  4. Click the + button once
  5. Verify quantity increases to 2

**Expected Results:**
  - Quantity field updates immediately
  - Plus button successfully increments quantity by 1
  - Quantity display is clear and accurate

#### 4.2. Decrement quantity using - button

**File:** `tests/quantity/decrement-quantity.spec.ts`

**Steps:**
  1. Navigate to the homepage
  2. Locate any product
  3. Click the + button to set quantity to 3
  4. Click the - button twice
  5. Verify quantity is now 1

**Expected Results:**
  - Minus button successfully decrements quantity
  - Quantity cannot go below 1
  - Decrement button works as expected

#### 4.3. Directly edit quantity in input field

**File:** `tests/quantity/edit-quantity-field.spec.ts`

**Steps:**
  1. Navigate to the homepage
  2. Locate any product
  3. Click on the quantity input field
  4. Clear the field and type '5'
  5. Press Tab or click elsewhere to confirm
  6. Verify quantity shows 5

**Expected Results:**
  - Quantity field accepts direct numeric input
  - Field updates correctly when manually entered
  - Invalid entries are handled appropriately

#### 4.4. Add high quantity item to cart

**File:** `tests/quantity/add-high-quantity.spec.ts`

**Steps:**
  1. Navigate to the homepage
  2. Set quantity to 10 for any product
  3. Click ADD TO CART
  4. Navigate to cart

**Expected Results:**
  - High quantity items can be added
  - Cart displays the correct quantity
  - No validation errors occur

### 5. Shopping Cart - View and Manage

**Seed:** `tests/seed.spec.ts`

#### 5.1. View empty cart

**File:** `tests/cart/view-empty-cart.spec.ts`

**Steps:**
  1. Navigate to the homepage
  2. Click on the Cart link without adding any items
  3. Verify empty cart message is displayed

**Expected Results:**
  - Cart page loads successfully
  - Empty cart state is clearly communicated
  - Message states 'You cart is empty!' (note: slight typo in the app)
  - PROCEED TO CHECKOUT button is visible but may be disabled

#### 5.2. View cart with items

**File:** `tests/cart/view-cart-with-items.spec.ts`

**Steps:**
  1. Navigate to the homepage
  2. Add 2-3 different products to the cart
  3. Click on the Cart link
  4. Verify all added items are displayed with their details

**Expected Results:**
  - Cart displays all added items
  - Each item shows product name, price, and quantity
  - Total calculation is accurate
  - Items are listed in a clear format

#### 5.3. Update quantity in cart

**File:** `tests/cart/update-cart-quantity.spec.ts`

**Steps:**
  1. Add an item to cart
  2. Navigate to cart
  3. Locate the added item
  4. Modify the quantity (increase or decrease)
  5. Verify total price updates accordingly

**Expected Results:**
  - Quantity can be modified from cart view
  - Price calculations update immediately
  - Cart reflects the new quantity

#### 5.4. Remove item from cart

**File:** `tests/cart/remove-item-from-cart.spec.ts`

**Steps:**
  1. Add multiple items to cart
  2. Navigate to cart
  3. Click remove button for one item (if available)
  4. Verify item is removed from cart

**Expected Results:**
  - Item is successfully removed
  - Cart updates immediately
  - Cart counter decreases appropriately

### 6. Checkout and Order

**Seed:** `tests/seed.spec.ts`

#### 6.1. Proceed to checkout with items in cart

**File:** `tests/checkout/proceed-to-checkout.spec.ts`

**Steps:**
  1. Add at least one item to cart
  2. Navigate to cart
  3. Click PROCEED TO CHECKOUT button

**Expected Results:**
  - Checkout process initiates
  - User is navigated to checkout/payment page
  - Order details are displayed

#### 6.2. Verify order summary before payment

**File:** `tests/checkout/verify-order-summary.spec.ts`

**Steps:**
  1. Add multiple items with different quantities to cart
  2. Proceed to checkout
  3. Verify order summary displays all items with quantities and prices
  4. Verify total amount is correctly calculated

**Expected Results:**
  - All cart items are listed in order summary
  - Quantities and prices are accurate
  - Total calculation includes all items correctly

#### 6.3. Discount or promo code application

**File:** `tests/checkout/apply-promo-code.spec.ts`

**Steps:**
  1. Proceed to checkout with items in cart
  2. Look for promo code input field
  3. Enter a valid promo code if available
  4. Verify discount is applied or error message if invalid

**Expected Results:**
  - Promo code field is available (if feature exists)
  - Valid codes apply discount to total
  - Invalid codes show appropriate error message

### 7. Top Deals / Offers Page

**Seed:** `tests/seed.spec.ts`

#### 7.1. Navigate to Top Deals page

**File:** `tests/offers/navigate-to-top-deals.spec.ts`

**Steps:**
  1. Navigate to the homepage
  2. Click on 'Top Deals' link in the navigation menu
  3. Wait for the page to load

**Expected Results:**
  - Top Deals page loads successfully
  - URL changes to #/offers
  - Products with special offers are displayed

#### 7.2. View discounted products on Top Deals

**File:** `tests/offers/view-discounted-products.spec.ts`

**Steps:**
  1. Navigate to Top Deals page
  2. Verify products are displayed with offer details
  3. Identify if prices show discount percentages or special pricing

**Expected Results:**
  - Discounted products are clearly marked
  - Offer details are visible
  - Products on offers page may differ from homepage

#### 7.3. Add items from Top Deals to cart

**File:** `tests/offers/add-offer-items-to-cart.spec.ts`

**Steps:**
  1. Navigate to Top Deals page
  2. Select an item with offer
  3. Click ADD TO CART
  4. Navigate back to cart
  5. Verify the offer item is in cart with offer pricing

**Expected Results:**
  - Items from offers page can be added to cart
  - Correct pricing (with discount) is reflected in cart
  - Offer details are maintained through cart

### 8. Navigation and UI Elements

**Seed:** `tests/seed.spec.ts`

#### 8.1. Verify navigation menu items

**File:** `tests/navigation/verify-menu-items.spec.ts`

**Steps:**
  1. Navigate to the homepage
  2. Verify 'Top Deals' link is present in navigation
  3. Verify 'Flight Booking' link is present
  4. Verify 'Cart' link is present
  5. Click each link to verify they are functional

**Expected Results:**
  - All navigation links are visible
  - Each link is clickable
  - Navigation items direct to correct pages

#### 8.2. Click on GreenKart logo

**File:** `tests/navigation/click-logo.spec.ts`

**Steps:**
  1. Navigate to the homepage
  2. Add some items to cart
  3. Click on the GreenKart logo/header
  4. Verify user is redirected to homepage

**Expected Results:**
  - Logo click returns to homepage
  - Cart items are preserved when returning home
  - Navigation experience is seamless

#### 8.3. Verify external course link

**File:** `tests/navigation/verify-course-link.spec.ts`

**Steps:**
  1. Navigate to the homepage
  2. Look for the course offer link at the top
  3. Verify the link text mentions 'Limited offer - FREE Core Java & QA Resume course'
  4. Click on the link

**Expected Results:**
  - Course link is visible and descriptive
  - Link opens the course/offer page
  - Link does not interfere with main shopping functionality

#### 8.4. Flight Booking link functionality

**File:** `tests/navigation/flight-booking-link.spec.ts`

**Steps:**
  1. Navigate to the homepage
  2. Click on 'Flight Booking' link in the navigation
  3. Verify navigation occurs to the flight booking page

**Expected Results:**
  - Flight Booking link is operational
  - User is directed to a different application/page
  - Main cart state is not affected

### 9. Price and Currency Display

**Seed:** `tests/seed.spec.ts`

#### 9.1. Verify rupee symbol display on prices

**File:** `tests/price/verify-rupee-symbol.spec.ts`

**Steps:**
  1. Navigate to the homepage
  2. Examine prices of multiple products
  3. Verify each price displays the rupee symbol (₹)

**Expected Results:**
  - All prices show rupee symbol
  - Currency symbol is correctly placed before price amount
  - Prices are clearly readable

#### 9.2. Verify cart price counter updates

**File:** `tests/price/verify-cart-price-counter.spec.ts`

**Steps:**
  1. Navigate to the homepage
  2. Add Brocolli (₹120) to cart
  3. Verify cart counter shows Price: 120
  4. Add Cauliflower (₹60) to cart
  5. Verify cart counter shows Price: 180

**Expected Results:**
  - Cart price counter updates with each addition
  - Calculation is accurate
  - Price format matches product prices

#### 9.3. Calculate total for multiple items with quantities

**File:** `tests/price/calculate-total-with-quantities.spec.ts`

**Steps:**
  1. Navigate to homepage
  2. Set Brocolli quantity to 2 (₹240)
  3. Add to cart
  4. Set Apple quantity to 3 (₹216)
  5. Add to cart
  6. Verify total in cart is ₹456

**Expected Results:**
  - Price calculation is correct for multiple items
  - Quantities are properly factored into total
  - Decimal values are handled if applicable

#### 9.4. Verify product-specific pricing

**File:** `tests/price/verify-product-pricing.spec.ts`

**Steps:**
  1. Navigate to homepage
  2. Check prices of at least 5 different products
  3. Verify prices match the display on product cards

**Expected Results:**
  - Prices are consistent across displays
  - All products have valid numeric prices
  - No products show invalid or missing prices

### 10. Responsive Design and Browser Compatibility

**Seed:** `tests/seed.spec.ts`

#### 10.1. Verify homepage layout on different viewport sizes

**File:** `tests/responsive/verify-responsive-layout.spec.ts`

**Steps:**
  1. Navigate to homepage with standard desktop resolution (1920x1080)
  2. Verify layout is properly displayed
  3. Resize to tablet size (768x1024)
  4. Verify layout adapts appropriately
  5. Resize to mobile size (375x667)
  6. Verify layout remains functional

**Expected Results:**
  - Layout adapts to different screen sizes
  - Elements remain accessible at all resolutions
  - Text and images scale appropriately
  - No elements are cut off or overlapped

#### 10.2. Verify touch interactions on mobile

**File:** `tests/responsive/verify-mobile-interactions.spec.ts`

**Steps:**
  1. Set viewport to mobile size (375x667)
  2. Attempt to search for a product
  3. Add item to cart
  4. Navigate to cart
  5. Perform all interactions without scrolling issues

**Expected Results:**
  - All buttons and links are easily tappable
  - No unwanted zoom or scaling occurs
  - Touch interactions work as expected

### 11. Error Handling and Edge Cases

**Seed:** `tests/seed.spec.ts`

#### 11.1. Handle network delay or slow loading

**File:** `tests/errors/handle-slow-loading.spec.ts`

**Steps:**
  1. Navigate to homepage
  2. Observe if products load gradually or all at once
  3. If using throttling, verify UI remains responsive

**Expected Results:**
  - Application handles loading states gracefully
  - No broken images or missing elements
  - User can interact even during loading

#### 11.2. Verify error message for invalid search

**File:** `tests/errors/invalid-search-handling.spec.ts`

**Steps:**
  1. Search for a product that doesn't exist (e.g., 'xyznonexistent')
  2. Observe the result
  3. Verify appropriate feedback is given to user

**Expected Results:**
  - Invalid search is handled gracefully
  - User is informed that no results were found
  - Search can be cleared without issues

#### 11.3. Verify application behavior with JavaScript disabled items

**File:** `tests/errors/javascript-functionality.spec.ts`

**Steps:**
  1. Verify that key features use JavaScript (add to cart, search, quantity)
  2. Attempt to use these features
  3. Verify they function correctly

**Expected Results:**
  - JavaScript-dependent features work reliably
  - No console errors prevent functionality

### 12. Cross-browser Validation

**Seed:** `tests/seed.spec.ts`

#### 12.1. Test on Chromium browser

**File:** `tests/browsers/test-chromium.spec.ts`

**Steps:**
  1. Load application on Chromium
  2. Perform basic workflow: search, add to cart, view cart

**Expected Results:**
  - Application loads without issues
  - All features work correctly
  - No layout distortions

#### 12.2. Test on Firefox browser

**File:** `tests/browsers/test-firefox.spec.ts`

**Steps:**
  1. Load application on Firefox
  2. Perform basic workflow: search, add to cart, view cart

**Expected Results:**
  - Application loads without issues
  - All features work correctly
  - Styling is consistent with Chromium

#### 12.3. Test on WebKit (Safari) browser

**File:** `tests/browsers/test-webkit.spec.ts`

**Steps:**
  1. Load application on WebKit
  2. Perform basic workflow: search, add to cart, view cart

**Expected Results:**
  - Application loads without issues
  - All features work correctly
  - No Safari-specific issues occur
