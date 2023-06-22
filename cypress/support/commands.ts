/// <reference types="cypress" />

import LogIn_POM from '../pageobjects/LogIn';
const logIn = new LogIn_POM();

Cypress.Commands.add('clickOnElement', (selector: string): void => {
  cy.get(selector).click();
});

Cypress.Commands.add('typeOnElement', (selector, text) => {
  cy.get(selector)
    .type(text)
});

Cypress.Commands.add('login', () => {

  // Click on sign in link in order to go to sign in page
  logIn.clickOnSignIn();
  // Enter email address
  cy.fixture('credentials').then((data) => {
    logIn.typeLogInEmail(data.email);
  })
  // Enter password
  cy.fixture('credentials').then((data) => {
    logIn.typeLogInPassword(data.password);
  })

  // Submit(login)
  logIn.submitLogIn();

});

Cypress.Commands.add('verifyElementVisibilityAndTextContent', (selector, expectedText) => {
  cy.get(selector)
    .should('be.visible')
    .invoke('text')
    .should('eq', expectedText);
});

Cypress.Commands.add('verifyElementVisibilityAndInnerText', (selector, expectedInnerText) => {
  cy.get(selector)
    .should('be.visible')
    .invoke('prop', 'innerText')
    .should('eq', expectedInnerText);
});

Cypress.Commands.add('checkCurrentPageUrl', (expectedUrl) => {
  cy.location('href').should('eq', expectedUrl);
});

Cypress.Commands.add('clearInputFieldValue', (selector) => {
  cy.get(selector).clear();
});





