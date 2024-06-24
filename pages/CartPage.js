exports.CartPage =
class CartPage {

    constructor(page)
    {
        this.page=page;
        this.cartLink =  page.getByRole('link', { name: 'Cart', exact: true })
        this.placeOrderBtn = page.getByRole('button', { name: 'Place Order' })
    }
//adding comment to see if code is updated in github
    async placeOrder()
    {
       await this.cartLink.click();
       await this.placeOrderBtn.click();
    }
}