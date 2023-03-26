export class HomePage {
  constructor() {
    this.profileAnchor = "#user_dropdown > .dropdown-toggle";
    this.logoutAnchor = "#logout > a";
  }

  clickProfile() {
    cy.get(this.profileAnchor).click();
  }

  clickLogout() {
    cy.get(this.logoutAnchor).click();
  }
}
