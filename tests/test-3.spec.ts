import { test, expect } from '@playwright/test';

test.beforeEach('Run before each test', async({page})=> {

  //console.log('running before each test')

  //console.log('Running ${test.info().title}');
  await page.goto('https://www.youtube.com/');

});

/*test.beforeAll('Run before all test', async()=> {

  console.log('Running before all test...!')

})*/


test('hooks test1', async ({ page }) => {
  
  await page.getByPlaceholder('Search').click();
  await page.getByPlaceholder('Search').fill('api testing by testerstalk');
  await expect (page.getByRole('button', { name: 'Search', exact: true })).toBeEnabled();
  await page.getByRole('button',{name: 'Search', exact:true}).click();
 await page.waitForTimeout(3000);
})

test('hooks test2', async ({ page }) => {
  
  await page.getByPlaceholder('Search').click();
  await page.getByPlaceholder('Search').fill('cypress by testers talk');
  await expect (page.getByRole('button', { name: 'Search', exact: true })).toBeEnabled();
  await page.getByRole('button',{name: 'Search', exact:true}).click();
 await page.waitForTimeout(3000);
})
  