export class HomePage {
  constructor() {
    this.profileDropdown = "#user_dropdown";
    this.logoutAnchor = "#logout";
  }

  clickProfile() {
    cy.get(this.profileDropdown).click();
  }

  clicklogout() {
    cy.get(this.logoutAnchor).click();
  }
}
