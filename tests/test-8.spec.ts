import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('jisaj');
  await page.locator('#loginusername').press('Tab');
  await page.locator('#loginpassword').fill('test123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.locator('div:nth-child(5) > .card > a').click();
  await page.getByRole('link', { name: 'Add to cart' }).click();
 // await page.getByRole('link', { name: 'Cart', exact: true }).click();
});