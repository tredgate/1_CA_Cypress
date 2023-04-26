import { HeaderSection } from "./header_section";

export class HomePage extends HeaderSection {
  constructor() {
    super("module=dashboard/dashboard");
    this.projectsMenuAnchor = "#Projects a";
    this.welcomePageHeader = "#welcome-page-header";
    cy.get(this.welcomePageHeader).should("be.visible");
  }
}
