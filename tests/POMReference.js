const { expect } = require('@playwright/test');

exports.PlaywrightDevPage = class PlaywrightDevPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
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
// copied below block of code from pw official website/ 

REFER PW WEBSITE AND SDET CHANNEL FOR POM CODING

  constructor(page) {
    this.page = page;
    this.getStartedLink = page.locator('a', { hasText: 'Get started' });
    this.gettingStartedHeader = page.locator('h1', { hasText: 'Installation' });
    this.pomLink = page.locator('li', {
      hasText: 'Guides',
    }).locator('a', {
      hasText: 'Page Object Model',
    });
    this.tocList = page.locator('article div.markdown ul > li > a');
  }

  async goto() {
    await this.page.goto('https://playwright.dev');
  }

  async getStarted() {
    await this.getStartedLink.first().click();
    await expect(this.gettingStartedHeader).toBeVisible();
  }

  async pageObjectModel() {
    await this.getStarted();
    await this.pomLink.click();
  }
};