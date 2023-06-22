import '../../testSetup';
import Home_POM from 'cypress/pageobjects/Home';
import Products_POM from '../../pageobjects/Products';
import Shipping_POM from '../../pageobjects/Shipping';
import Payments_POM from 'cypress/pageobjects/Payments';

const home = new Home_POM();
const products = new Products_POM();
const shipping = new Shipping_POM();
const payments = new Payments_POM();

describe('Select a product and place an order', () => {

    it('should allow the user to select a product and place an order ', () => {
        cy.login();
        cy.wait(4000);
        // Verify that user is located on home page of Magento
        home.checkIfUserIsLocatedOnHomePageUrl();

        products.clickOnProductDetails();

        // Verify that user is located on hero-hoodie page
        products.checkIfUserIsLocatedOnHeroHoodiePage();

        // Verify that the name and the price of the product in the homepage are equal to the name and price of the product on the details page
        expect(products.productNameOnHomePage).to.equal(products.productNameOnDetailsPage);
        expect(products.productPriceOnHomePage).to.equal(products.productPriceOnDetailsPage);

        cy.wait(4000);
        products.selectProductSize();
        products.selectProductColor();
        products.clearProductQuantityDefaultValue();
        products.typeProductQuantity();
        products.addProductToCart();
        cy.wait(4000);

        // Verify that the product is successfully addedd to the cart by reading 'You added Hero Hoodie to your shopping cart.' message
        cy.verifyElementVisibilityAndInnerText(products.successMessageSelector, products.successMessageText);
        products.visitShoppingCart();

        cy.wait(4000);

        // Verify that number of items in the cart is as expected
        cy.verifyElementVisibilityAndInnerText(products.numberOfItemsInCartSelector, products.numberOfItemsInCartText);
        // Verify that product name in the cart is as expected
        cy.verifyElementVisibilityAndTextContent(products.productNameiNCartSelector, products.productNameInCart);
        // Verify that product price in the cart is as expected
        cy.verifyElementVisibilityAndInnerText(products.productPriceInInCartSelector, products.productPriceInCart);

        products.clickProceedToCheckout();

        // <---------- Shipping ---------->

        // Verify that user is located on shipping page of Magento
        shipping.checkIfUserIsLocatedOnShippingPage();

        // Verify that 'Shipping Address' is visible and it contains the expected text
        cy.verifyElementVisibilityAndTextContent(shipping.shippingAddressSelector, shipping.shippingAddressSelectorText);

        shipping.typeStreetAddress();
        shipping.typeCity();
        shipping.selectState();
        shipping.typeZipCode();
        shipping.selectCountry();
        shipping.typePhoneNumber();
        shipping.selectTableRateShippingMethod();
        shipping.goToReviewAndPaymentPage();

        // <---------- Review & Payments ---------->

        // Verify that user is located on payment page
        payments.checkIfUserIsLocatedOnPaymentPage();

        // Verify that payment method text is as expected
        cy.verifyElementVisibilityAndTextContent(payments.paymentMethodSelector, payments.paymentMethodSelectorText);
        // Verify that the amount of SubTotal in cart is as expected
        cy.verifyElementVisibilityAndInnerText(payments.cartSubTotalSelector, payments.cartSubTotal);
        // Verify that the amount of shipping in cart is as expected
        cy.verifyElementVisibilityAndInnerText(payments.shippingAmountSelector, payments.shippingAmount);

        payments.clickPlaceOrder();
        cy.wait(4000);
        // Verify that user receives order confirmation message as expected
        cy.verifyElementVisibilityAndTextContent(payments.orderConfirmationSelector, payments.orderConfirmationText);
        //  Verify that user is located on order confirmation page
        payments.checkIfUserIsLocatedOnOrderConfirmationPage();

    })
})

