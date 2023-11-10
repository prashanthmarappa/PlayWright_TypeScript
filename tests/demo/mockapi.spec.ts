import { test, expect } from '@playwright/test';


test("mocks a fruit api", async ({ page }) => {
    // Mock the api call before navigating
    await page.route('*/**/api/v1/fruits', async route => {
    const json = [{ name: 'Apple', id: 22 },{ name: 'Strawberry', id: 22 }];
    await route.fulfill({ json });
    });
  
    // Go to the page
    await page.goto('https://demo.playwright.dev/api-mocking/');
    // Assert that the Apple fruit is visible
    await expect(page.getByText('Apple')).toBeVisible();
  });
  