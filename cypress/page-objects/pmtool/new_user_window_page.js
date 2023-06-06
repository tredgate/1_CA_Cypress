import { UsersPage } from "./users_page";

export class NewUserWindowPage {
  constructor() {
    this.usernameInput = "div[data-testid=Username] input";
    this.accessGroupSelect = "div[data-testid='Access Group'] select";
    this.passwordInput = "#password";
    this.firstNameInput = "div[data-testid='First Name'] input";
    this.lastNameInput = "div[data-testid='Last Name'] input";
    this.emailInput = "div[data-testid='User Email'] input";
    this.saveButton = "button[type='submit']";
  }

  typeUsername(username) {
    cy.get(this.usernameInput).type(username);
    return this;
  }

  selectAccessGroup(accessGroup) {
    cy.get(this.accessGroupSelect).select(accessGroup);
    return this;
  }

  typePassword(password) {
    cy.get(this.passwordInput).type(password);
    return this;
  }

  typeFirstName(firstName) {
    cy.get(this.firstNameInput).type(firstName);
    return this;
  }

  typeLastName(lastName) {
    cy.get(this.lastNameInput).type(lastName);
    return this;
  }

  typeEmail(email) {
    cy.get(this.emailInput).type(email);
    return this;
  }

  clickSave() {
    cy.get(this.saveButton).click();
    return new UsersPage();
  }
}
