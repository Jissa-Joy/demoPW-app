import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Frames.html');
  await page.frameLocator('iframe[name="SingleFrame"]').getByRole('textbox').fill('Hello world!!!!!');

  /*await page.getByRole('link', { name: 'Iframe with in an Iframe' }).click();
  //await page.frameLocator('#Multiple >> internal:text="<p>Your browser does not"i').frameLocator('internal:text="<p>Your browser does not"i').getByRole('textbox').click();
  //await page.frameLocator('#Multiple >> internal:text="<p>Your browser does not"i').frameLocator('internal:text="<p>Your browser does not"i').getByRole('textbox').fill('hiiii');
  */
});