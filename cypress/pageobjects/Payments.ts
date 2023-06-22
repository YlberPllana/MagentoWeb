class Payments_POM {

    paymentMethodSelector = '#checkout-payment-method-load > div > div > div.step-title';
    paymentMethodSelectorText = 'Payment Method';
    cartSubTotalSelector = 'tbody > tr.totals.sub > td';
    cartSubTotal = '$54.00';
    shippingAmountSelector = 'tbody > tr.totals.shipping.excl > td > span';
    shippingAmount = '$0.00';
    placeOrderButtonSelector = 'button.action.primary.checkout';
    orderConfirmationSelector = '[data-ui-id="page-title-wrapper"]';
    orderConfirmationText = 'Thank you for your purchase!';
    paymentPageUrl = 'https://magento.softwaretestingboard.com/checkout/#payment';
    orderConfirmationPageUrl = 'https://magento.softwaretestingboard.com/checkout/onepage/success/';

    clickPlaceOrder(): void {
        cy.get(this.placeOrderButtonSelector).click();
    }
    checkIfUserIsLocatedOnPaymentPage(): void {
        cy.checkCurrentPageUrl(this.paymentPageUrl);
    }
    checkIfUserIsLocatedOnOrderConfirmationPage(): void {
        cy.checkCurrentPageUrl(this.orderConfirmationPageUrl);
    }
}

export default Payments_POM;