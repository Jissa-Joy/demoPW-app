import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('jisaj');
  await page.locator('#loginusername').press('Tab');
  await page.locator('#loginpassword').fill('test123');
  await page.getByRole('button', { name: 'Log in' }).click();
  //select a phone
  await page.locator('div:nth-child(2) > .card > a').click();
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.getByRole('link', { name: 'Home (current)' }).click();

  //select another phone
  await page.locator('div:nth-child(6) > .card > a').click();
  await page.getByText('Sony xperia z5$320 *includes').click();
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.getByRole('link', { name: 'Cart', exact: true }).click();
  await page.getByRole('row', { name: 'Samsung galaxy s7 800 Delete' }).getByRole('link').click();
  await page.getByRole('button', { name: 'Place Order' }).click();
});