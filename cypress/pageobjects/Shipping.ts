import dotenv from 'dotenv';
dotenv.config();

class Shipping_POM {

    shippingAddressSelector = '#shipping > div.step-title';
    shippingAddressSelectorText = 'Shipping Address';
    streetAddressSelector = "input[name='street[0]']";
    streetAddress = 'St. George Bush';
    citySelector = "input[name='city']";
    city = 'San Francisco';
    stateSelector = "select[name='region_id']";
    stateValue = '12';
    zipCodeSelector = "input[name='postcode']";
    zipCode = '23423';
    countrySelector = "select[name='country_id']";
    countryValue = 'US';
    phoneNumberSelector = "input[name='telephone']";
    phoneNumber = '03200323293'
    selectTableRateShippingMethodSelector = 'tbody > tr:nth-child(1) > td:nth-child(1) > input';
    nextButtonSelector = '#shipping-method-buttons-container > div > button';
    shippingPageUrl = 'https://magento.softwaretestingboard.com/checkout/#shipping';


    typeStreetAddress(): void {
        cy.typeOnElement(this.streetAddressSelector, this.streetAddress);
    }
    typeCity(): void {
        cy.typeOnElement(this.citySelector, this.city);
    }
    selectState(): void {
        cy.get(this.stateSelector).select(this.stateValue);
    }
    typeZipCode(): void {
        cy.typeOnElement(this.zipCodeSelector, this.zipCode);
    }
    selectCountry(): void {
        cy.get(this.countrySelector).select(this.countryValue);
    }
    typePhoneNumber(): void {
        cy.typeOnElement(this.phoneNumberSelector, this.phoneNumber);
    }
    selectTableRateShippingMethod(): void {
        cy.get(this.selectTableRateShippingMethodSelector).check();
    }
    goToReviewAndPaymentPage(): void {
        cy.get(this.nextButtonSelector).click();
    }
    checkIfUserIsLocatedOnShippingPage(): void {
        cy.checkCurrentPageUrl(this.shippingPageUrl);
    }

}
export default Shipping_POM;