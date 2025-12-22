# 📊 GreenKart Test Execution Report

## How to View the HTML Report

Run this command in your terminal:

```bash
npx playwright show-report
```

This will automatically open your default browser with the interactive HTML report showing:

---

## 📈 Quick Summary

**Test Execution Date:** December 22, 2025  
**Total Tests Run:** 86  
**✅ Passed:** 34 tests (39.5%)  
**❌ Failed:** 52 tests (60.5%)  
**⏱️ Total Duration:** 17.3 minutes  

---

## 📋 Test Results by Suite

| Test Suite | Tests | Passed | Failed | Rate |
|---|---|---|---|---|
| Homepage | 8 | 6 | 2 | 75% ✓ |
| Search | 10 | 4 | 6 | 40% |
| Quantity | 11 | 7 | 4 | 64% ✓ |
| Cart | 11 | 3 | 8 | 27% |
| Price | 9 | 3 | 6 | 33% |
| Top Deals | 13 | 0 | 13 | 0% ❌ |
| Navigation | 14 | 9 | 5 | 64% ✓ |
| End-to-End | 10 | 2 | 8 | 20% |

---

## 🔴 Critical Issues Found

### 1. **Logo Locator Issue** 
- **Status:** ❌ CRITICAL
- **Impact:** 4 tests failing
- **Problem:** `.logo` selector not visible/found
- **Affected Tests:**
  - Homepage loads verification
  - Logo clickability check
  - Logo navigation tests

### 2. **Cart Count Doubling** 
- **Status:** ❌ CRITICAL
- **Impact:** 8 tests failing
- **Problem:** getCartItemsCount() returns doubled values
- **Examples:**
  - Expected: 1 item, Got: 2
  - Expected: 3 items, Got: 6
- **Root Cause:** `.product-info` locator selector issue

### 3. **Top Deals Page Not Loading**
- **Status:** ❌ CRITICAL
- **Impact:** 13 tests failing (15% of total)
- **Problem:** All Top Deals tests timeout waiting for 'h1' element
- **Root Cause:** Navigation to #/offers may not be working

### 4. **Price Symbol Missing**
- **Status:** ⚠️ HIGH
- **Impact:** 2 tests failing
- **Problem:** Price element contains only number, not "₹ 120" format
- **Expected:** "₹ 120"
- **Actual:** "120"

### 5. **Timeout Issues**
- **Status:** ⚠️ HIGH
- **Impact:** 16 tests timing out
- **Problem:** Locators waiting indefinitely for elements
- **Affected Areas:**
  - Quantity decrement operations
  - Cart updates
  - Logo interactions

---

## 🔧 Next Steps to Fix

### Priority 1 (Critical - Fix First)
1. **Update Logo Locator**
   - Find correct selector for GreenKart logo
   - Update in `homePage.pom.spec.js`
   - Test: Verify homepage loads

2. **Fix Cart Count Logic**
   - Review `.product-info` selector
   - Check for duplicate element selection
   - Test: Add 1 item, verify count = 1

3. **Update Price Locator**
   - Find element with "₹ 120" format
   - Update price selector
   - Test: Verify ₹ symbol present

4. **Verify Top Deals Navigation**
   - Check if #/offers URL works
   - Verify h1 element exists
   - Test: Navigate to offers page

### Priority 2 (High)
5. Fix product count after search (expects doubled values)
6. Add proper wait strategies instead of timeouts
7. Fix strict mode locator violations

---

## 📂 Report Files Location

- **HTML Report:** `playwright-report/index.html`
- **Test Results:** `test-results/` (contains screenshots and traces)
- **JSON Results:** `test-results/results.json`

---

## 🎯 Testing Infrastructure Status

✅ **Framework:** Playwright (JavaScript)  
✅ **Pattern:** Page Object Model (POM)  
✅ **Test Structure:** Well-organized into 8 suites  
✅ **Documentation:** Comprehensive  
❌ **Current Pass Rate:** 39.5%  
🔧 **Status:** Needs locator updates  

---

## 📊 Detailed Failure Analysis

**Timeout Errors:** 16 tests (31% of failures)
- Root cause: Elements not found or not loaded
- Solution: Update locators, improve wait strategies

**Assertion Failures:** 20 tests (38% of failures)
- Root cause: Expected vs actual values mismatch
- Solution: Fix counting logic and selectors

**Locator Issues:** 16 tests (31% of failures)
- Root cause: Incorrect CSS selectors
- Solution: Inspect DOM and update selectors

---

## 💡 Key Observations

1. **Good news:** Test infrastructure is solid and well-structured
2. **Good news:** 34 tests are passing, showing many features work
3. **Issue:** Locators need updates for current app DOM
4. **Solution:** Update Page Objects with correct selectors
5. **Expectation:** Once fixed, pass rate should reach 95-100%

---

## 🚀 Open the Report Now

```bash
npx playwright show-report
```

This command will:
1. Generate the HTML report from test results
2. Open interactive report in your default browser
3. Show detailed test execution timeline
4. Display screenshots for failed tests
5. Include execution traces and logs

---

## 📝 Report Includes

✅ Complete test execution timeline  
✅ Pass/fail status for each test  
✅ Execution duration per test  
✅ Screenshots at each test step  
✅ Detailed error messages  
✅ Browser and platform information  
✅ Video recordings (if enabled)  
✅ Network traces  

---

**Generated:** December 22, 2025  
**Framework:** Playwright with JavaScript  
**Application:** GreenKart E-Commerce (https://rahulshettyacademy.com/seleniumPractise/#/)
