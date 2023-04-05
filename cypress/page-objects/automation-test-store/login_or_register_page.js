import { MyAccountPage } from "./my_account_page";
import { RegistrationPage } from "./register_page";

export class LoginOrRegisterPage {
  constructor() {
    this.continueToRegistrationButton = "button[title='Continue']";
    this.loginNameInput = "#loginFrm_loginname";
    this.passwordInput = "#loginFrm_password";
    this.loginButton = "button[title='Login']";
  }

  clickContinueToRegistration() {
    cy.get(this.continueToRegistrationButton).click();
    return new RegistrationPage();
  }

  typeUsername(username) {
    cy.get(this.loginNameInput).type(username);
    return this;
  }

  typePassword(password) {
    cy.get(this.passwordInput).type(password);
    return this;
  }

  clickLogin() {
    cy.get(this.loginButton).click();
    return new MyAccountPage();
  }
}
