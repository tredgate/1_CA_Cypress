import { LoginPage } from "./prep_login_page";

export class HomePage {
  constructor() {
    this.profileDropdown = "#user_dropdown";
    this.logoutAnchor = "#logout";
  }

  clickProfile() {
    cy.get(this.profileDropdown).click();
    return this;
  }

  clicklogout() {
    cy.get(this.logoutAnchor).click();
    return new LoginPage();
  }
}
