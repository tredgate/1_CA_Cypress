import { LoginPage } from "./login_page";

export class HomePage {
  constructor() {
    this.profileAnchor = "#user_dropdown > .dropdown-toggle";
    this.logoutAnchor = "#logout > a";
  }

  clickProfile() {
    cy.get(this.profileAnchor).click();
    return this;
  }

  clickLogout() {
    cy.get(this.logoutAnchor).click();
    return new LoginPage();
  }
}
