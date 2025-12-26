/* # GreenKart API Test Suite Documentation

## Overview
Comprehensive API test suite for the GreenKart e-commerce application covering Products, Cart, Orders, and Promo Code APIs.

## Test Files Created

### 1. **apiHelper.js**
- Location: `tests/api/apiHelper.js`
- Purpose: Reusable API helper class with all API methods
- Methods:
  - `getProducts()` - Get all products
  - `getProductById(productId)` - Get specific product
  - `searchProducts(query)` - Search products
  - `createCart(cartData)` - Create new cart
  - `getCart(cartId)` - Get cart details
  - `updateCart(cartId, updateData)` - Update cart
  - `deleteCart(cartId)` - Delete cart
  - `addItemToCart(cartId, itemData)` - Add item to cart
  - `removeItemFromCart(cartId, itemId)` - Remove item
  - `placeOrder(orderData)` - Place order
  - `getOrder(orderId)` - Get order details
  - `getOrders()` - Get all orders
  - `applyPromoCode(cartId, promoCode)` - Apply promo code
  - `getDeals()` - Get deals/offers

### 2. **product-api.spec.js**
- Location: `tests/api/product-api.spec.js`
- Test Count: 10 tests
- Coverage:
  - ✅ Retrieve all products
  - ✅ Verify product schema
  - ✅ Product count validation
  - ✅ Get product by ID
  - ✅ Search products by name
  - ✅ Case insensitive search
  - ✅ No search results handling
  - ✅ Invalid product ID (404)
  - ✅ Price validation
  - ✅ Retrieve deals

### 3. **cart-api.spec.js**
- Location: `tests/api/cart-api.spec.js`
- Test Count: 11 tests
- Coverage:
  - ✅ Create new cart
  - ✅ Retrieve cart by ID
  - ✅ Add single item to cart
  - ✅ Add multiple items
  - ✅ Update cart quantity
  - ✅ Remove item from cart
  - ✅ Delete entire cart
  - ✅ Invalid cart ID (404)
  - ✅ Negative quantity validation
  - ✅ Zero quantity validation

### 4. **order-api.spec.js**
- Location: `tests/api/order-api.spec.js`
- Test Count: 10 tests
- Coverage:
  - ✅ Place order successfully
  - ✅ Retrieve all orders
  - ✅ Get order by ID
  - ✅ Missing email validation
  - ✅ Invalid email validation
  - ✅ Empty items validation
  - ✅ Invalid order ID (404)
  - ✅ Multiple items order
  - ✅ Order status verification

### 5. **promo-api.spec.js**
- Location: `tests/api/promo-api.spec.js`
- Test Count: 7 tests
- Coverage:
  - ✅ Apply valid promo code
  - ✅ Invalid promo code
  - ✅ Expired promo code
  - ✅ Empty promo code
  - ✅ Promo on empty cart
  - ✅ Case insensitive promo code

### 6. **integrated-api.spec.js**
- Location: `tests/api/integrated-api.spec.js`
- Test Count: 4 tests
- Coverage:
  - ✅ Complete workflow (browse → cart → order)
  - ✅ Search and add to cart
  - ✅ Multiple products purchase
  - ✅ Response time validation

## Total API Tests: 52 Tests

## Running API Tests

### Run all API tests:
```bash
npx playwright test --grep @API */