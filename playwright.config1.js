import { defineConfig, devices } from '@playwright/test';


/**
 * @see https://playwright.dev/docs/test-configuration
 * custom config file
 */
const config = ({
  testDir: './tests',
  reporter: 'html',
  timeout: 30 * 1000,
  expect: {
    timeout: 30 * 1000,
  },
  reporter: [
    ["line"],
    [
      "allure-playwright",
      {
        resultsDir: "allure-results",
      },
    ],
  ],
  Projects : [
    {
      name : 'Safari',
      use: 
      {
        browserName: 'webkit',
        headed: false,
        screenshot: 'on',
        trace: 'on'
        //trace: 'retain-on-failure'
      }
    },
    {
      name : 'chrome',
      use: 
      {
        browserName: 'chromium',
        headed: true,
        screenshot: 'only-on-failure',
        trace: 'on'
        //trace: 'retain-on-failure'
      }
    }
  ]
});
module.exports = config
