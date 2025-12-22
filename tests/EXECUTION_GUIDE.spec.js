/**
 * =============================================
 * TEST EXECUTION GUIDE & SAMPLE CONFIGURATIONS
 * =============================================
 * 
 * This file contains example configurations and commands
 * to run the GreenKart test suite efficiently.
 * 
 * 
 * BASIC COMMANDS:
 * ===============
 * 
 * 1. Install all dependencies
 *    npm install @playwright/test
 * 
 * 2. Install Playwright browsers
 *    npx playwright install
 * 
 * 3. Run all tests
 *    npx playwright test
 * 
 * 4. Run tests in headed mode (watch execution)
 *    npx playwright test --headed
 * 
 * 5. Run tests in UI mode (visual test runner)
 *    npx playwright test --ui
 * 
 * 
 * RUNNING SPECIFIC TEST SUITES:
 * =============================
 * 
 * Homepage Tests:
 *   npx playwright test tests/homepage-tests.spec.js
 * 
 * Search Tests:
 *   npx playwright test tests/search-tests.spec.js
 * 
 * Quantity Tests:
 *   npx playwright test tests/quantity-tests.spec.js
 * 
 * Cart Tests:
 *   npx playwright test tests/cart-tests.spec.js
 * 
 * Price Tests:
 *   npx playwright test tests/price-tests.spec.js
 * 
 * Top Deals Tests:
 *   npx playwright test tests/topdeals-tests.spec.js
 * 
 * Navigation Tests:
 *   npx playwright test tests/navigation-tests.spec.js
 * 
 * End-to-End Tests:
 *   npx playwright test tests/end-to-end-tests.spec.js
 * 
 * 
 * FILTERING TESTS:
 * ================
 * 
 * Run tests matching pattern:
 *   npx playwright test -g "search"
 *   npx playwright test -g "cart"
 *   npx playwright test -g "price"
 * 
 * Run only failed tests:
 *   npx playwright test --last-failed
 * 
 * Run specific test:
 *   npx playwright test tests/homepage-tests.spec.js -g "homepage loads"
 * 
 * 
 * BROWSER SELECTION:
 * ==================
 * 
 * Chromium only:
 *   npx playwright test --project=chromium
 * 
 * Firefox only:
 *   npx playwright test --project=firefox
 * 
 * WebKit only:
 *   npx playwright test --project=webkit
 * 
 * All browsers:
 *   npx playwright test
 * 
 * 
 * PARALLEL EXECUTION:
 * ===================
 * 
 * Run with 4 workers:
 *   npx playwright test --workers=4
 * 
 * Run with 1 worker (sequential):
 *   npx playwright test --workers=1
 * 
 * Run with default workers:
 *   npx playwright test
 * 
 * 
 * DEBUGGING:
 * ==========
 * 
 * Run with Playwright Inspector:
 *   npx playwright test --debug
 * 
 * Run with UI debugging:
 *   npx playwright test --ui
 * 
 * Run with trace viewer:
 *   npx playwright test --trace on
 * 
 * View trace:
 *   npx playwright show-trace trace/trace.zip
 * 
 * Debug specific test:
 *   npx playwright test --debug tests/homepage-tests.spec.js
 * 
 * 
 * REPORTING:
 * ==========
 * 
 * Generate HTML report:
 *   npx playwright test
 *   npx playwright show-report
 * 
 * Use list reporter:
 *   npx playwright test --reporter=list
 * 
 * Use JSON reporter:
 *   npx playwright test --reporter=json > report.json
 * 
 * Use HTML reporter (default):
 *   npx playwright test --reporter=html
 * 
 * Open report in browser:
 *   npx playwright show-report
 * 
 * 
 * SAMPLE BATCH COMMANDS:
 * ======================
 * 
 * Full test run with report:
 *   npx playwright test && npx playwright show-report
 * 
 * Quick smoke test (headed):
 *   npx playwright test -g "homepage|search" --headed --workers=2
 * 
 * Full regression (all browsers):
 *   npx playwright test --reporter=html
 * 
 * CI/CD pipeline:
 *   npx playwright install && npx playwright test
 * 
 * Development (fast, with watch):
 *   npx playwright test --headed --workers=2 --retries=0
 * 
 * 
 * PLAYWRIGHT.CONFIG.JS EXAMPLE:
 * =============================
 * 
 * module.exports = {
 *   testDir: './tests',
 *   fullyParallel: true,
 *   forbidOnly: !!process.env.CI,
 *   retries: process.env.CI ? 2 : 0,
 *   workers: process.env.CI ? 1 : undefined,
 *   
 *   reporter: 'html',
 *   
 *   use: {
 *     baseURL: 'https://rahulshettyacademy.com/seleniumPractise/#/',
 *     trace: 'on-first-retry',
 *     screenshot: 'only-on-failure',
 *     video: 'retain-on-failure',
 *   },
 *   
 *   projects: [
 *     {
 *       name: 'chromium',
 *       use: { ...devices['Desktop Chrome'] },
 *     },
 *     {
 *       name: 'firefox',
 *       use: { ...devices['Desktop Firefox'] },
 *     },
 *     {
 *       name: 'webkit',
 *       use: { ...devices['Desktop Safari'] },
 *     },
 *   ],
 * };
 * 
 * 
 * ENVIRONMENT VARIABLES:
 * ======================
 * 
 * Set headless mode:
 *   HEADLESS=1 npx playwright test
 * 
 * Set base URL:
 *   BASE_URL=http://localhost:3000 npx playwright test
 * 
 * Set debug mode:
 *   DEBUG=pw:api npx playwright test
 * 
 * CI mode:
 *   CI=1 npx playwright test
 * 
 * 
 * QUICK RUN SCENARIOS:
 * ====================
 * 
 * Scenario 1: Quick smoke test (5 minutes)
 *   npx playwright test -g "homepage" --headed --workers=2
 * 
 * Scenario 2: Full feature test (15 minutes)
 *   npx playwright test --workers=4
 * 
 * Scenario 3: Regression test (30 minutes with all browsers)
 *   npx playwright test
 * 
 * Scenario 4: Debug single failure
 *   npx playwright test --debug tests/cart-tests.spec.js -g "empty"
 * 
 * Scenario 5: CI/CD pipeline
 *   npm install
 *   npx playwright install
 *   npx playwright test
 *   npx playwright show-report
 * 
 * 
 * PERFORMANCE OPTIMIZATION:
 * =========================
 * 
 * Fastest execution (for CI):
 *   npx playwright test --workers=4 --reporter=list
 * 
 * Development friendly (visual feedback):
 *   npx playwright test --headed --workers=2 --reporter=list
 * 
 * Debug friendly (with details):
 *   npx playwright test --debug --reporter=list
 * 
 * Detailed reporting (for stakeholders):
 *   npx playwright test --reporter=html
 *   npx playwright show-report
 * 
 * 
 * TROUBLESHOOTING COMMANDS:
 * =========================
 * 
 * Check Playwright version:
 *   npx playwright --version
 * 
 * Update Playwright:
 *   npm update @playwright/test
 * 
 * Reinstall browsers:
 *   npx playwright install --with-deps
 * 
 * List all installed browsers:
 *   npx playwright install --list
 * 
 * Clear cache:
 *   rm -rf ~/.cache/ms-playwright
 * 
 * Run specific test with verbose output:
 *   npx playwright test tests/homepage-tests.spec.js -g "homepage" --reporter=list -vv
 * 
 * 
 * GITHUB ACTIONS EXAMPLE:
 * =======================
 * 
 * name: E2E Tests
 * 
 * on:
 *   push:
 *     branches: [main]
 *   pull_request:
 *     branches: [main]
 * 
 * jobs:
 *   test:
 *     timeout-minutes: 60
 *     runs-on: ubuntu-latest
 *     steps:
 *       - uses: actions/checkout@v3
 *       - uses: actions/setup-node@v3
 *         with:
 *           node-version: '16'
 *       - name: Install dependencies
 *         run: npm install
 *       - name: Install Playwright
 *         run: npx playwright install --with-deps
 *       - name: Run tests
 *         run: npx playwright test
 *       - name: Upload report
 *         if: always()
 *         uses: actions/upload-artifact@v3
 *         with:
 *           name: playwright-report
 *           path: playwright-report/
 *           retention-days: 30
 * 
 * 
 * JENKINS PIPELINE EXAMPLE:
 * =========================
 * 
 * pipeline {
 *   agent any
 *   
 *   stages {
 *     stage('Install') {
 *       steps {
 *         sh 'npm install'
 *         sh 'npx playwright install --with-deps'
 *       }
 *     }
 *     
 *     stage('Test') {
 *       steps {
 *         sh 'npx playwright test --reporter=json'
 *       }
 *     }
 *     
 *     stage('Report') {
 *       steps {
 *         publishHTML([
 *           reportDir: 'playwright-report',
 *           reportFiles: 'index.html',
 *           reportName: 'Playwright Report'
 *         ])
 *       }
 *     }
 *   }
 * }
 * 
 * 
 * USEFUL ALIASES (add to .bashrc or .bash_profile):
 * ==================================================
 * 
 * alias pt='npx playwright test'
 * alias pt-debug='npx playwright test --debug'
 * alias pt-ui='npx playwright test --ui'
 * alias pt-headed='npx playwright test --headed'
 * alias pt-report='npx playwright show-report'
 * alias pt-install='npx playwright install --with-deps'
 * 
 * 
 * TIPS & TRICKS:
 * ==============
 * 
 * 1. For faster development, use --workers=1 and --headed
 * 2. Use --debug for interactive debugging
 * 3. Use --ui for visual test runner experience
 * 4. Set --retries=0 during development
 * 5. Use -g pattern matching for focused testing
 * 6. Enable trace on first retry for CI failures
 * 7. Use --reporter=list for quick output
 * 8. Use --reporter=html for detailed reports
 * 9. Run --last-failed to quickly fix issues
 * 10. Use environment variables for CI/CD integration
 * 
 * =============================================
 */

module.exports = {
    description: 'Test Execution Guide and Configuration Examples'
};
