import dotenv from 'dotenv';
dotenv.config();

class LogIn_POM {

    logInSelector = 'div.panel.wrapper > div > ul > li.authorization-link > a';
    customerLoginSelector = '[data-ui-id="page-title-wrapper"]';
    customerLoginText = 'Customer Login';
    loginEmailSelector = '#email';
    loginEmail = 'ylberhpllana@gmail.com'
    emailAddress = 'magentowedbsiete@gmail.com';
    loginPasswordSelector = '#pass';
    loginButtonSelector = '#send2';
    loggedInConfirmationSelector = 'div.panel.wrapper > div > ul > li.greet.welcome > span';
    loggedInConfirmationSelectorText = 'Welcome, Ylber Pllana!';

    clickOnSignIn(): void {
        cy.clickOnElement(this.logInSelector);
    }
    typeLogInEmail(email: string): void {
        cy.get(this.loginEmailSelector).type(email);
    }
    typeLogInPassword(password: string): void {
        cy.get(this.loginPasswordSelector).type(password);
    }
    submitLogIn(): void {
        cy.get(this.loginButtonSelector).click();
    }

}
export default LogIn_POM;