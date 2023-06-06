import { LoginPage } from "./login_page";
import { MenuSection } from "./menu_section";

export class HeaderSection extends MenuSection {
  constructor(path) {
    super(path);
    this.profileAnchor = "#user_dropdown > .dropdown-toggle";
    this.logoutAnchor = "#logout > a";
    this.usernameSpan = ".username";
  }

  clickProfile() {
    cy.get(this.profileAnchor).click();
    return this;
  }

  clickLogout() {
    cy.get(this.logoutAnchor).click();
    return new LoginPage();
  }

  userNameHasFullName(fullName) {
    cy.get(this.usernameSpan).should('contain.text', fullName);
  }
}
