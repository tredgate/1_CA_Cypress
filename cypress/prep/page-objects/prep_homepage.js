import { HeaderSection } from "./header_section";
import { ProjectsPage } from "./projects_page";

export class HomePage extends HeaderSection {
  constructor() {
    super();
    this.projectsMenuAnchor = "#Projects a";
    this.welcomePageHeader = "#welcome-page-header";
    cy.get(this.welcomePageHeader).should("be.visible");
  }

  clickProjects() {
    cy.get(this.projectsMenuAnchor).click();
    return new ProjectsPage();
  }
}
