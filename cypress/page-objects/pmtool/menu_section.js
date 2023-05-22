import { BasePage } from "./base_page";

export class MenuSection extends BasePage {
  constructor(path) {
    super(path);
    this.projectsMenuAnchor = "#Projects a";
    this.dashboardAnchor = "#dashboard a";
    this.usersAnchor = "#Users .menu-itemsitems1";
  }

  clickProjects() {
    const { ProjectsPage } = require("./projects_page");
    cy.get(this.projectsMenuAnchor).click();
    return new ProjectsPage();
  }

  clickDashboard() {
    const { HomePage } = require("./home_page");
    cy.get(this.dashboardAnchor).click();
    return new HomePage();
  }

  clickUsers() {
    const { UsersPage } = require("./users_page");
    cy.get(this.usersAnchor).click();
    return new UsersPage();
  }
}
