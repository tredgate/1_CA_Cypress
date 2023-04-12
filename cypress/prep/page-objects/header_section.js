import { MenuSection } from "./menu_section";
import { LoginPage } from "./prep_login_page";

export class HeaderSection extends MenuSection {
  constructor() {
    super();
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
