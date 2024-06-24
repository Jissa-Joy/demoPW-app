import { test, expect } from '@playwright/test';

/*test('frames testcase', async ({ page }) => {

  await page.goto('https://demo.automationtesting.in/Frames.html');
//total frames in the page
const allFrames = await page.frames();
//console.log("number of Frames:", allFrames.length)

const frame1 = await page.frame({url:'https://demo.automationtesting.in/Frames.html'});


});*/


test('test frames', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Frames.html');
  await page.frameLocator('iframe[name="SingleFrame"]').getByRole('textbox').fill('Hello world!!!!!');

  /*await page.getByRole('link', { name: 'Iframe with in an Iframe' }).click();
  //await page.frameLocator('#Multiple >> internal:text="<p>Your browser does not"i').frameLocator('internal:text="<p>Your browser does not"i').getByRole('textbox').click();
  //await page.frameLocator('#Multiple >> internal:text="<p>Your browser does not"i').frameLocator('internal:text="<p>Your browser does not"i').getByRole('textbox').fill('hiiii');
  */
});