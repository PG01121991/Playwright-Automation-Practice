import { defineConfig, devices } from '@playwright/test';


/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  reporter: 'html',
  timeout: 40 * 1000,
  expect: {
    timeout: 40 * 1000,
  },
  use: {
    browserName: 'chromium',
    headed: false,
    screenshot: 'on',
    trace: 'on'
    //trace: 'retain-on-failure'
  }
});
module.exports = config
