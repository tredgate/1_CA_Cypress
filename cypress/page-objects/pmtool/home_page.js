import { LoginPage } from "./login_page";
import { ProjectsPage } from "./projects_page";

export class HomePage {
  constructor() {
    this.profileAnchor = "#user_dropdown > .dropdown-toggle";
    this.logoutAnchor = "#logout > a";
    this.projectsMenuAnchor = "#Projects a";
  }

  clickProfile() {
    cy.get(this.profileAnchor).click();
    return this;
  }

  clickLogout() {
    cy.get(this.logoutAnchor).click();
    return new LoginPage();
  }

  clickProjects() {
    cy.get(this.projectsMenuAnchor).click();
    return new ProjectsPage();
  }
}
