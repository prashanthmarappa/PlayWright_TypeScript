 import { test, expect } from '@playwright/test';

  test('test', async ({ page }) => {
    await page.goto('https://www.apple.com/');
    await page.getByLabel('iPhone', { exact: true }).click();
    await page.getByRole('link', { name: 'iPhone 15 Pro New' }).click();
    await page.locator('div').filter({ hasText: 'iPhone 15 Pro Buy From $999 or $41.62/mo. for 24 mo.1' }).getByLabel('Buy iPhone 15 Pro').click();
    
    await page.locator('label').filter({ hasText: 'iPhone 15 Pro 6.1-inch display¹ From $999 or $41.62/mo. per month for 24 mo.mont' }).click();
    await page.locator('label').filter({ hasText: 'Blue Titanium' }).locator('img').scrollIntoViewIfNeeded
    await page.locator('label').filter({ hasText: 'Blue Titanium' }).locator('img').click();
    await page.locator('#root span').filter({ hasText: '128GBFootnote ²' }).nth(1).scrollIntoViewIfNeeded
    await page.locator('#root span').filter({ hasText: '128GBFootnote ²' }).nth(1).click();
    await page.locator('#noTradeIn_label').scrollIntoViewIfNeeded
    await page.locator('#noTradeIn_label').click();
    await page.getByText('Buy$999.00Pay with Apple Pay or other payment methods.').scrollIntoViewIfNeeded
    await page.getByText('Buy$999.00Pay with Apple Pay or other payment methods.').click();
    await page.getByText('Connect to any carrier later').scrollIntoViewIfNeeded
    await page.getByText('Connect to any carrier later').click();
    await page.locator('#applecareplus_58_noapplecare_label').scrollIntoViewIfNeeded
    await page.locator('#applecareplus_58_noapplecare_label').click();
    
    await page.getByRole('button', { name: 'Add to Bag' }).click();
    
    await page.getByRole('button', { name: 'Review Bag' }).click();
    await expect(page.getByText('$1,081.42', { exact: true })).toBeChecked
   // await page.getByText('$1,081.42', { exact: true }).click();
  }); 
