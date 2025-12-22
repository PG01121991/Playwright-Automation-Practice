/**
 * ================================================
 * GreenKart Test Suite - MASTER INDEX
 * ================================================
 * 
 * This file serves as a master index of all files
 * created in this automation test suite.
 * 
 * 
 * ================================================
 * ALL FILES CREATED (15 TOTAL)
 * ================================================
 * 
 * LOCATION: tests/ directory
 * 
 * 
 * SECTION 1: PAGE OBJECT MODELS (3 Files)
 * ========================================
 * 
 * File: homePage.pom.spec.js
 * Type: Page Object Model
 * Purpose: Encapsulates home page locators and methods
 * Lines: ~350
 * Methods: 25+
 * 
 * File: cartPage.pom.spec.js
 * Type: Page Object Model
 * Purpose: Encapsulates shopping cart page locators and methods
 * Lines: ~280
 * Methods: 20+
 * 
 * File: topDealsPage.pom.spec.js
 * Type: Page Object Model
 * Purpose: Encapsulates Top Deals/Offers page locators and methods
 * Lines: ~290
 * Methods: 20+
 * 
 * 
 * SECTION 2: TEST SUITES (8 Files)
 * =================================
 * 
 * File: homepage-tests.spec.js
 * Type: Test Suite
 * Purpose: Tests for homepage and product browsing
 * Tests: 8
 * Lines: ~200
 * 
 * File: search-tests.spec.js
 * Type: Test Suite
 * Purpose: Tests for product search functionality
 * Tests: 10
 * Lines: ~250
 * 
 * File: quantity-tests.spec.js
 * Type: Test Suite
 * Purpose: Tests for quantity management
 * Tests: 11
 * Lines: ~280
 * 
 * File: cart-tests.spec.js
 * Type: Test Suite
 * Purpose: Tests for shopping cart operations
 * Tests: 11
 * Lines: ~330
 * 
 * File: price-tests.spec.js
 * Type: Test Suite
 * Purpose: Tests for pricing and currency display
 * Tests: 9
 * Lines: ~280
 * 
 * File: topdeals-tests.spec.js
 * Type: Test Suite
 * Purpose: Tests for Top Deals/Offers page
 * Tests: 13
 * Lines: ~320
 * 
 * File: navigation-tests.spec.js
 * Type: Test Suite
 * Purpose: Tests for navigation and UI elements
 * Tests: 14
 * Lines: ~310
 * 
 * File: end-to-end-tests.spec.js
 * Type: Test Suite
 * Purpose: Complete user workflow tests
 * Tests: 10
 * Lines: ~330
 * 
 * 
 * SECTION 3: DOCUMENTATION (5 Files)
 * ===================================
 * 
 * File: TEST_DOCUMENTATION.spec.js
 * Type: Documentation
 * Purpose: Comprehensive test suite documentation
 * Covers: Structure, tests, best practices, troubleshooting
 * Lines: ~450
 * 
 * File: QUICK_REFERENCE.spec.js
 * Type: Documentation
 * Purpose: Quick reference guide for common tasks
 * Covers: Commands, selectors, assertions, debugging
 * Lines: ~350
 * 
 * File: TEST_SUITE_SUMMARY.spec.js
 * Type: Documentation
 * Purpose: High-level summary of entire suite
 * Covers: Overview, methods reference, structure
 * Lines: ~400
 * 
 * File: EXECUTION_GUIDE.spec.js
 * Type: Documentation
 * Purpose: Detailed guide for running tests
 * Covers: Commands, CI/CD examples, configurations
 * Lines: ~420
 * 
 * File: PROJECT_SUMMARY.spec.js
 * Type: Documentation
 * Purpose: Final completion summary
 * Covers: Statistics, features, quick start
 * Lines: ~300
 * 
 * 
 * FILE: MASTER_INDEX.spec.js (This File)
 * Type: Documentation
 * Purpose: Master index of all created files
 * 
 * 
 * ================================================
 * STATISTICS
 * ================================================
 * 
 * Total Files: 15
 * 
 * By Category:
 * - Page Objects: 3
 * - Test Suites: 8
 * - Documentation: 5
 * 
 * By Size:
 * - Total Lines of Code: ~5,000+
 * - Total Test Cases: 84+
 * - Total Methods: 65+
 * 
 * 
 * ================================================
 * QUICK NAVIGATION
 * ================================================
 * 
 * FOR DEVELOPERS STARTING OUT:
 * 1. Read: QUICK_REFERENCE.spec.js
 * 2. Read: TEST_DOCUMENTATION.spec.js
 * 3. Run: homepage-tests.spec.js
 * 4. Explore: Page objects
 * 
 * FOR QUICK ANSWERS:
 * 1. Check: QUICK_REFERENCE.spec.js
 * 2. Check: EXECUTION_GUIDE.spec.js
 * 
 * FOR COMPLETE DETAILS:
 * 1. Read: TEST_DOCUMENTATION.spec.js
 * 2. Read: TEST_SUITE_SUMMARY.spec.js
 * 3. Read: PROJECT_SUMMARY.spec.js
 * 
 * FOR RUNNING TESTS:
 * 1. Read: EXECUTION_GUIDE.spec.js
 * 2. Read: QUICK_REFERENCE.spec.js
 * 
 * FOR UNDERSTANDING ARCHITECTURE:
 * 1. Study: Page object files
 * 2. Read: TEST_SUITE_SUMMARY.spec.js
 * 3. Review: Test suite files
 * 
 * 
 * ================================================
 * FILE PURPOSES AT A GLANCE
 * ================================================
 * 
 * Page Objects:
 * homePage.pom.spec.js          → Homepage interactions
 * cartPage.pom.spec.js          → Cart operations
 * topDealsPage.pom.spec.js      → Offers page interactions
 * 
 * Feature Tests:
 * homepage-tests.spec.js        → Homepage & products
 * search-tests.spec.js          → Search functionality
 * quantity-tests.spec.js        → Quantity management
 * cart-tests.spec.js            → Shopping cart
 * price-tests.spec.js           → Pricing & currency
 * topdeals-tests.spec.js        → Offers & deals
 * navigation-tests.spec.js      → Navigation & UI
 * end-to-end-tests.spec.js      → Complete workflows
 * 
 * Getting Help:
 * TEST_DOCUMENTATION.spec.js    → Complete guide
 * QUICK_REFERENCE.spec.js       → Quick answers
 * EXECUTION_GUIDE.spec.js       → Running tests
 * TEST_SUITE_SUMMARY.spec.js    → Summary overview
 * PROJECT_SUMMARY.spec.js       → Final summary
 * MASTER_INDEX.spec.js          → This file
 * 
 * 
 * ================================================
 * INSTALLATION & SETUP
 * ================================================
 * 
 * Step 1: Install Dependencies
 *   npm install @playwright/test
 * 
 * Step 2: Install Browsers
 *   npx playwright install
 * 
 * Step 3: Run Tests
 *   npx playwright test
 * 
 * Step 4: View Report
 *   npx playwright show-report
 * 
 * 
 * ================================================
 * COMMONLY USED COMMANDS
 * ================================================
 * 
 * Run all tests:
 *   npx playwright test
 * 
 * Run specific file:
 *   npx playwright test tests/homepage-tests.spec.js
 * 
 * Run with filter:
 *   npx playwright test -g "search"
 * 
 * Headed mode:
 *   npx playwright test --headed
 * 
 * Debug mode:
 *   npx playwright test --debug
 * 
 * UI mode:
 *   npx playwright test --ui
 * 
 * Show report:
 *   npx playwright show-report
 * 
 * 
 * ================================================
 * KEY FILES TO READ FIRST
 * ================================================
 * 
 * 1. QUICK_REFERENCE.spec.js
 *    → For quick start and common commands
 * 
 * 2. TEST_DOCUMENTATION.spec.js
 *    → For comprehensive understanding
 * 
 * 3. EXECUTION_GUIDE.spec.js
 *    → For running tests
 * 
 * 4. Page object files (homePage.pom.spec.js, etc.)
 *    → For understanding test structure
 * 
 * 5. Test suite files (e.g., homepage-tests.spec.js)
 *    → For understanding test implementation
 * 
 * 
 * ================================================
 * WHAT'S IN EACH SECTION
 * ================================================
 * 
 * PAGE OBJECTS:
 * ✓ All locators for elements
 * ✓ Reusable methods for interactions
 * ✓ Clean API for test writers
 * ✓ Easy to maintain
 * ✓ Single source of truth for selectors
 * 
 * TEST SUITES:
 * ✓ Organized by feature
 * ✓ Clear test names
 * ✓ Proper setup/teardown
 * ✓ Independent tests
 * ✓ Meaningful assertions
 * 
 * DOCUMENTATION:
 * ✓ Complete usage guide
 * ✓ Command reference
 * ✓ Configuration examples
 * ✓ Troubleshooting tips
 * ✓ Extension guidelines
 * 
 * 
 * ================================================
 * SUPPORT
 * ================================================
 * 
 * For questions about:
 * - Running tests       → EXECUTION_GUIDE.spec.js
 * - Page objects       → TEST_DOCUMENTATION.spec.js
 * - Test structure     → TEST_DOCUMENTATION.spec.js
 * - Commands          → QUICK_REFERENCE.spec.js
 * - Configuration     → EXECUTION_GUIDE.spec.js
 * - Troubleshooting   → TEST_DOCUMENTATION.spec.js
 * 
 * 
 * ================================================
 * PROJECT COMPLETION STATUS
 * ================================================
 * 
 * ✅ Page Objects Created: 3
 * ✅ Test Suites Created: 8
 * ✅ Total Tests: 84+
 * ✅ Documentation: Complete
 * ✅ CI/CD Examples: Included
 * ✅ Examples: Comprehensive
 * ✅ Ready to Use: Yes
 * ✅ Production Ready: Yes
 * 
 * 
 * ================================================
 * NEXT STEPS
 * ================================================
 * 
 * 1. Install dependencies
 * 2. Read QUICK_REFERENCE.spec.js
 * 3. Run: npx playwright test
 * 4. View report: npx playwright show-report
 * 5. Explore test files
 * 6. Integrate with CI/CD
 * 7. Add more tests as needed
 * 
 * 
 * ================================================
 * FILE CHECKLIST
 * ================================================
 * 
 * PAGE OBJECTS:
 * □ homePage.pom.spec.js
 * □ cartPage.pom.spec.js
 * □ topDealsPage.pom.spec.js
 * 
 * TEST SUITES:
 * □ homepage-tests.spec.js
 * □ search-tests.spec.js
 * □ quantity-tests.spec.js
 * □ cart-tests.spec.js
 * □ price-tests.spec.js
 * □ topdeals-tests.spec.js
 * □ navigation-tests.spec.js
 * □ end-to-end-tests.spec.js
 * 
 * DOCUMENTATION:
 * □ TEST_DOCUMENTATION.spec.js
 * □ QUICK_REFERENCE.spec.js
 * □ TEST_SUITE_SUMMARY.spec.js
 * □ EXECUTION_GUIDE.spec.js
 * □ PROJECT_SUMMARY.spec.js
 * □ MASTER_INDEX.spec.js (this file)
 * 
 * 
 * ================================================
 * PROJECT METADATA
 * ================================================
 * 
 * Application: GreenKart E-Commerce
 * URL: https://rahulshettyacademy.com/seleniumPractise
 * Framework: Playwright
 * Language: JavaScript
 * Pattern: Page Object Model
 * Created: December 2024
 * Status: Complete and Ready
 * Version: 1.0
 * 
 * ================================================
 */

module.exports = {
    projectName: 'GreenKart Test Suite',
    totalFiles: 15,
    description: 'Master index of all automation test files'
};
