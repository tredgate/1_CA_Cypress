export class MenuSection {
  constructor() {
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
}
