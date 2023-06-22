import '../../testSetup';
import CreateAccount_POM from '../../pageobjects/CreateAccount';
import Home_POM from 'cypress/pageobjects/Home';

const createAccount = new CreateAccount_POM();
const home = new Home_POM();

describe('Create an account in Magento website', () => {
  it('should allow user to create an account when user enters valid data', () => {

    // Verify that user is located on home page of Magento
    home.checkIfUserIsLocatedOnHomePageUrl();

    createAccount.clickOnCreateAccount();

    // Verify that 'Create New Customer Account' is visible and it contains the expected text
    cy.verifyElementVisibilityAndTextContent(createAccount.createNewCustomerAccountSelector, createAccount.createNewCustomerAccountSelectorText)

    createAccount.typeFirstName();
    createAccount.typeLastName();
    createAccount.subscribeForNewsletter();
    createAccount.typeEmail();
    createAccount.typePassword();
    createAccount.confirmPassword();
    createAccount.submitCreateAnAccount();

    cy.wait(4000);

    // Verify that 'Thank you for registering with Main Website Store.' is visible after creating the account
    cy.verifyElementVisibilityAndTextContent(createAccount.registringMessageSelector, createAccount.registringMesssageSelectorText);

    // Verify that user is located on Account Page
    createAccount.checkIfUserIsLocatedOnAccountPage();

  })

});
