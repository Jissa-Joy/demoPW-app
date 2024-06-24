exports.LoginPage =
class LoginPage {

    constructor(page) {
        this.page = page;
        this.loginLink = page.getByRole('link', { name: 'Log in' })
        this.username =  page.locator('#loginusername')
        this.password = page.locator('#loginpassword')
        this.okButton = page.getByRole('button', { name: 'Log in' })
    }

    async gotoLoginPage(){
        await this.page.goto('https://www.demoblaze.com/index.html');
    }

    async login(uname,pwd){

            await this.loginLink.click();
            await this.username.fill(uname)
            await this.password.fill(pwd)
            await this.okButton.click();
        }

}