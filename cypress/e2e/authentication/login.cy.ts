import '../../testSetup';
import LogIn_POM from '../../pageobjects/LogIn';
import Home_POM from 'cypress/pageobjects/Home';

const logIn = new LogIn_POM();
const home = new Home_POM();

describe('Login into Magento website', () => {
    it('should allow user to login with valid credentials', () => {
        cy.login();
        cy.wait(4000);

        // Verify that user is located on home page of Magento
        home.checkIfUserIsLocatedOnHomePageUrl();

        // Verify that 'Welcome, Ylber Pllana!' is visible after creating and logged into the account
        cy.verifyElementVisibilityAndTextContent(logIn.loggedInConfirmationSelector, logIn.loggedInConfirmationSelectorText);

    })
})

