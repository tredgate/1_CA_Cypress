import { AccountsPage } from "./accounts_page";

export class DashboardPage {
  constructor() {
    this.accountsButton = '[data-testid="accounts_section_link"]';
  }

  clickAccounts() {
    cy.intercept("/accounts/user/1").as("accounts_api");
    cy.get(this.accountsButton).click();
    return new AccountsPage();
  }

  waitForLoginApi() {
    cy.wait("@login_api");
    return this;
  }
}
