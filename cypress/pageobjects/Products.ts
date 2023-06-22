class Products_POM {

    productNameOnHomePage: string;
    productNameOnDetailsPage: string;
    productPriceOnHomePage: string;
    productPriceOnDetailsPage: string;
    productNameOnHomePageSelector = 'div > div > ol > li:nth-child(4) > div > div > strong > a';
    productNameOnDetailsPageSelector = '[data-ui-id="page-title-wrapper"]';
    productPriceOnHomePageSelector = '#old-price-158-widget-product-grid';
    productPriceOnDetailsPageSelector = '#product-price-158';
    productSizeSelector = '#option-label-size-143-item-169';
    productColorSelector = '#option-label-color-93-item-49';
    productQuantitySelector = '#qty';
    quantity = 1;
    addProductToCartSelector = '#product-addtocart-button';
    successMessageSelector = 'div[data-bind="html: $parent.prepareMessageForHtml(message.text)"]';
    successMessageText = 'You added Hero Hoodie to your shopping cart.';
    shoppingCartSelector = 'div.header.content > div.minicart-wrapper > a';
    numberOfItemsInCartSelector = '#minicart-content-wrapper > div.block-content > div.items-total';
    numberOfItemsInCartText = '1 Item in Cart';
    productNameiNCartSelector = '#mini-cart > li > div > div > strong > a';
    productNameInCart = 'Hero Hoodie';
    productPriceInInCartSelector = 'div.price-container > span > span > span > span';
    productPriceInCart = '$54.00';
    proceedToCheckoutSelector = '#top-cart-btn-checkout';
    heroHoodiePageUrl = 'https://magento.softwaretestingboard.com/hero-hoodie.html';

    clickOnProductDetails(): void {
        cy.clickOnElement(this.productNameOnHomePageSelector);
    }
    checkIfUserIsLocatedOnHeroHoodiePage(): void {
        cy.checkCurrentPageUrl(this.heroHoodiePageUrl);
    }
    selectProductSize(): void {
        cy.get(this.productSizeSelector).click();
    }
    selectProductColor(): void {
        cy.get(this.productColorSelector).click();
    }
    clearProductQuantityDefaultValue(): void {
        cy.clearInputFieldValue(this.productQuantitySelector);
    }
    typeProductQuantity(): void {
        cy.get(this.productQuantitySelector).type(this.quantity.toString());
    }
    addProductToCart(): void {
        cy.clickOnElement(this.addProductToCartSelector);
    }

    getProductNameOnHomePage(): void {
        cy.get(this.productNameOnHomePageSelector)
            .invoke('text')
            .then((text) => {
                this.productNameOnHomePage = text.trim();
            });
    }
    getProductNameOnDetailsPage(): void {
        cy.get(this.productNameOnDetailsPageSelector)
            .invoke('text')
            .then((text) => {
                this.productNameOnDetailsPage = text.trim();
            });
    }
    getProductPriceOnHomePage(): void {
        cy.get(this.productPriceOnHomePageSelector)
            .invoke('text')
            .then((text) => {
                this.productPriceOnHomePage = text.trim();
            });
    }
    getProductPriceOnDetailsPage(): void {
        cy.get(this.productPriceOnHomePageSelector)
            .invoke('text')
            .then((text) => {
                this.productPriceOnDetailsPage = text.trim();
            });
    }

    visitShoppingCart(): void {
        cy.clickOnElement(this.shoppingCartSelector);
    }
    clickProceedToCheckout(): void {
        cy.clickOnElement(this.proceedToCheckoutSelector);
    }

}
export default Products_POM;