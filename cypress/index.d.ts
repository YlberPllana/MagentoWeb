/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject> {
    clickOnElement(selector: string): Chainable<Subject>;
    typeOnElement(selector: string, text: string): void;
    verifyElementVisibilityAndTextContent(selector: string, expectedText: string): void;
    verifyElementVisibilityAndInnerText(selector: string, expectedInerText: string): void;
    assertElementColor(selector: string, color: string): void;
    login(): Chainable<Subject>;
    checkCurrentPageUrl(expectedUrl: string): void;
    clearInputFieldValue(selector: string): void;
    assertValues(firstSelector: string, secondSelector: string): void;
  }
}




