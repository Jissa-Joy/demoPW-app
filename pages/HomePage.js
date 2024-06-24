
exports.HomePage =
    class HomePage {
        constructor(page) {
            this.page = page;
            this.itemList = page.locator('div:nth-child(5) > .card > a');
            this.addtoCartBtn = page.getByRole('link', { name: 'Add to cart' });
             this.phoneNexus =  page.locator('div:nth-child(2) > .card > a')               }

        async addProductToCart()
        {
            await this.phoneNexus.click();
            await this.addtoCartBtn.click();
            
            }

//can be removed below code - as pw auto handles Alert Dialogs
           /* await this.page.on('dialog',async dialog =>{
                if(dialog.message().includes('added'))
                    {
                        await dialog.accept();
                    }
            }*/
           
        }
           
    