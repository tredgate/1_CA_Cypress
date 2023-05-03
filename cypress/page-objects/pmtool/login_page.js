import { HomePage } from "./home_page";
import { LostPasswordPage } from "./lost_password_page";

export class LoginPage {
  constructor() {
    this.pmtoolUrl = "http://tredgate.com/pmtool/";
    this.usernameInput = "#username";
    this.passwordInput = "#password";
    this.logoImg = "img[title='TEG Project Management']";
    this.loginButton = ".btn";
    this.lostPasswordAnchor = "#forget_password";
    this.pageHeader = "h3.form-title";
  }

  openPmtool() {
    cy.visit(this.pmtoolUrl);
    return this;
  }

  typeUsername(username) {
    cy.get(this.usernameInput).type(username);
    return this;
  }

  typePassword(password) {
    cy.get(this.passwordInput).type(password);
    return this;
  }

  clickLogin() {
    cy.get(this.loginButton).click();
    return new HomePage();
  }

  clickLostPassword() {
    cy.get(this.lostPasswordAnchor).click();
    return new LostPasswordPage();
  }

  pageHeaderHasText(headerText) {
    cy.get(this.pageHeader).should("have.text", headerText);
  }

  usernameHasPlaceholder(placeholderValue) {
    cy.get(this.usernameInput).should(
      "have.attr",
      "placeholder",
      placeholderValue
    );
  }

  usernameIsVisible() {
    cy.get(this.usernameInput).should("be.visible");
    return this;
  }

  usernameHasValue(usernameValue) {
    cy.get(this.usernameInput).should("have.value", usernameValue);
    return this;
  }

  passwordHasPlaceholder(placeholderValue) {
    cy.get(this.passwordInput).should(
      "have.attr",
      "placeholder",
      placeholderValue
    );
    return this;
  }

  passwordIsVisible() {
    cy.get(this.passwordInput).should("be.visible");
    return this;
  }

  logoIsVisible() {
    cy.get(this.logoImg).should("be.visible");
    return this;
  }
}
