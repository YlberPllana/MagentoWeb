import dotenv from 'dotenv';
dotenv.config();

class CreateAccount_POM {

    createAnAccountSelector = '.panel > .header > :nth-child(3) > a';
    createNewCustomerAccountSelector = '[data-ui-id="page-title-wrapper"]';
    createNewCustomerAccountSelectorText = 'Create New Customer Account';
    firstNameSelector = '#firstname';
    lastNameSelector = '#lastname';
    firstNameText = 'Ylber';
    lastNameText = 'Pllana';
    subscribeSelector = '#is_subscribed';
    emailSelector = '#email_address';
    passwordSelector = '#password';
    passwordConfirmationSelector = '#password-confirmation';
    submitCreateAnAccountSelector = '#form-validate > .actions-toolbar > div.primary > .action > span';
    registringMessageSelector = '#maincontent > div.page.messages > div:nth-child(2) > div > div > div';
    registringMesssageSelectorText = 'Thank you for registering with Main Website Store.';
    myAccountPageUrl = 'https://magento.softwaretestingboard.com/customer/account/';


    clickOnCreateAccount(): void {
        cy.clickOnElement(this.createAnAccountSelector);
    }
    typeFirstName(): void {
        cy.typeOnElement(this.firstNameSelector, this.firstNameText);
    }
    typeLastName(): void {
        cy.typeOnElement(this.lastNameSelector, this.lastNameText);
    }
    subscribeForNewsletter(): void {
        cy.get(this.subscribeSelector).check();
    }
    typeEmail(): void {
        cy.fixture('credentials').then((data) => {
            cy.typeOnElement(this.emailSelector, data.email);
        })
    }
    typePassword(): void {
        cy.fixture('credentials').then((data) => {
            cy.typeOnElement(this.passwordSelector, data.password);
        })
    }
    confirmPassword(): void {
        cy.fixture('credentials').then((data) => {
            cy.typeOnElement(this.passwordConfirmationSelector, data.confirmedPassword);
        })
    }
    submitCreateAnAccount(): void {
        cy.get(this.submitCreateAnAccountSelector).click();
    }
    checkIfUserIsLocatedOnAccountPage(): void {
        cy.checkCurrentPageUrl(this.myAccountPageUrl);
    }


}
export default CreateAccount_POM;