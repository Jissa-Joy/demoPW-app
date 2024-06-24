import { test, expect } from '@playwright/test';

test('handle drop down list in pw', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.getByPlaceholder('Search').fill('testers talk');
  await page.getByRole('button', { name: 'Search', exact: true }).click();
  await expect(page.locator('#avatar-section').getByRole('link')).toBeVisible();
});