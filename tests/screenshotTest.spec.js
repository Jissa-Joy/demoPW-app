import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.youtube.com/@testerstalk');

  
 await page. locator('#page-header-container').screenshot({path:'tests/screenshots/element2.png'})


});