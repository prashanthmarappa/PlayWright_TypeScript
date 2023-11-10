import { defineConfig, devices } from '@playwright/test';



export default defineConfig({
  testDir: './tests',

  fullyParallel: true,
 
  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 1 : 0,

  workers: process.env.CI ? 10 : undefined,

  reporter: 'html',

  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    video:'on',
    screenshot: 'on',
    trace: 'on-first-retry',
    contextOptions:{recordVideo:{dir:'test-results/videos/'}}
  },


  projects: [
    {
      name: 'Google Chrome',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' },
      fullyParallel:true,
    },
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
      fullyParallel:true,
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
      fullyParallel:true,
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
      fullyParallel:true,
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
  
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
  
});
