import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.com/');
  await page.getByLabel('Open Menu').click();
  await page.locator('#hmenu-content > ul.hmenu.hmenu-visible > li:nth-child(2) > a').click();
  await page.locator('#zg_header').getByRole('link', { name: 'New Releases' }).click();
});
