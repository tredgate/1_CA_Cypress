import { HeaderSection } from "./header_sections";

export class UsersPage extends HeaderSection {
  constructor() {
    super("module=items/items&path=1");
    this.page_title = "h3.page-title";
    cy.get(this.page_title).should("have.text", "Users");
  }
}
