export class AccountsPage {
  constructor() {
    this.titleText = "[data-testid='title']";
  }

  titleHasText(title) {
    cy.get(this.titleText).should("have.text", title);
    return this;
  }

  waitForAccountsApi() {
    cy.wait("@accounts_api");
    return this;
  }
}
