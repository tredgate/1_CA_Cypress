import { LostPasswordPage } from "../../page-objects/pmtool/lost_password_page";
import { HomePage } from "./prep_homepage";

export class LoginPage {
  constructor() {
    this.pmtoolUrl = "http://tredgate.com/pmtool/";
    this.usernameInput = "#username";
    this.passwordInput = "#password";
    this.loginButton = ".btn";
    this.lostPasswordAnchor = "#forget_password";
    this.pageHeader = "h3.form-title";
    this.alertDiv = ".alert-danger";
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
    return this;
  }

  alertNotExist() {
    cy.get(this.alertDiv).should("not.exist");
    return this;
  }

  usernameIsVisible() {
    cy.get(this.usernameInput).should("be.visible");
    return this;
  }

  usernameHasValue(value) {
    cy.get(this.usernameInput).should("be.visible");
    return this;
  }
}
