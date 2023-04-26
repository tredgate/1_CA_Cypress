import { BasePage } from "./base_page_prep";

export class MenuSection extends BasePage {
  constructor(path) {
    super(path);
    this.projectsMenuAnchor = "#Projects a";
    this.dashboardMenuAnchor = "#dashboard a";
  }

  clickReports() {
    const { ReportsPage } = require("./projects_page");
    cy.get(this.projectsMenuAnchor).click();
    return new ReportsPage();
  }

  clickDashboard() {
    const { HomePage } = require("./prep_homepage");
    cy.get(this.dashboardMenuAnchor).click();
    return new HomePage();
  }

  clickProjects() {
    const { ProjectsPage } = require("./projects_page");
    cy.get(this.projectsMenuAnchor).click();
    return new ProjectsPage();
  }

  clickUsers() {
    const { UsersPage } = require("./users_page");
    cy.get(this.usersAnchor).click();
    return new UsersPage();
  }
}
