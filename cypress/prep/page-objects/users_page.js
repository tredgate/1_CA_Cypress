import { HeaderSection } from "./header_section";

export class UsersPage extends HeaderSection {
  constructor() {
    super("module=items/items&path=1");
    this.page_title = "h3.page-title";
    this.addUserButton = "button[test_id='Add User']";
  }

  titleHasText(titleText) {
    cy.get(this.page_title).should("have.text", titleText);
  }

  titleIsVisible() {
    cy.get(this.page_title).should("be.visible");
  }

  addUserButtonIsVisible() {
    cy.get(this.addUserButton).should("be.visible");
  }

  addUserButtonHasText(buttonText) {
    cy.get(this.addUserButton).should("have.text", buttonText);
  }
}
