import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('test', async ({ page },testInfo) => {
  await page.goto('https://www.bankofamerica.com/');
  await page.getByRole('link', { name: 'Open Auto Loans Menu Collapsed' }).click();
  await page.getByRole('link', { name: 'Auto purchase loans' }).click();
  await page.getByLabel('Your Location: *').selectOption('TX');
  await page.getByRole('button', { name: 'Go and get state information' }).click();

  await page.getByLabel('Loan amount Enter only numeric digits without decimals.').scrollIntoViewIfNeeded;
  await page.getByLabel('Loan amount Enter only numeric digits without decimals.').waitFor();
  const accessibilityScanResults = await new AxeBuilder({ page })
   // .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
    .withTags(['wcag2a'])
      .include('#skip-to-h1')
   //   .include('#stateModalLink')
      .analyze();
      await testInfo.attach('accessibility-scan-results', {
        body: JSON.stringify(accessibilityScanResults, null, 2),
        contentType: 'application/json'
      });
    
      expect(accessibilityScanResults.violations).toEqual([]);
  await page.getByLabel('Loan amount Enter only numeric digits without decimals.').click();
  await page.getByLabel('Loan amount Enter only numeric digits without decimals.').fill('50000');
  await page.getByRole('button', { name: 'Calculate monthly payments' }).click();
  await expect(page.locator('.default-term')).toHaveText('60 months');
  //class="term-apr"
});
