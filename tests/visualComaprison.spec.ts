import { test, expect } from '@playwright/test';

test('Verify Landing page positive test', async ({ page }) => {
  await page.goto('https://playwright.dev');
 // await expect(page).toHaveScreenshot('landing.png',{ maxDiffPixels: 60000 });
 await expect(page).toHaveScreenshot('landing.png');
});


test('Verify Landing page negative test', async ({ page }) => {
  await page.goto('https://playwright.dev');
  await expect(page).toHaveScreenshot('landingnegative.png');
});

test('verify text in Title to Match snapshot', async ({ page }) => {
  await page.goto('https://playwright.dev');
  expect(await page.textContent('.hero__title')).toMatchSnapshot('hero.txt');
});