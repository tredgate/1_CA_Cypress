import { DashboardPage } from "./dashboard_page";

export class TegBLoginPage {
  constructor() {
    this.usernameInput = '[data-testid="username"]';
    this.passwordInput = '[data-testid="password"]';
    this.loginButton = '[data-testid="log_in"]';
  }

  openTegB() {
    cy.visit("http://localhost:3002");
    return this;
  }

  typeLogin(username) {
    cy.get(this.usernameInput).type(username);
    return this;
  }

  typePassword(password) {
    cy.get(this.passwordInput).type(password);
    return this;
  }

  clickLogin() {
    cy.intercept("/auth/login").as("login_api");
    cy.get(this.loginButton).click();
    return new DashboardPage();
  }
}
