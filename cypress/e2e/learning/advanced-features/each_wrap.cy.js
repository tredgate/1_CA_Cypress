import { HomePage } from "../../../page-objects/pmtool/home_page";
import { LoginPage } from "../../../page-objects/pmtool/login_page";

describe("Using Each and Wrap function", () => {
  beforeEach(() => {
    new LoginPage()
      .openPmtool()
      .typeUsername("fifka_petr")
      .typePassword("Tredgate2023")
      .clickLogin();
  });

  it("Checking if all rows in Project table has actions delete and edit", () => {
    new HomePage().clickProjects();
    cy.xpath("//tr[contains(@test-id, 'project_id_')]").each((row) => {
      cy.wrap(row).within(() => {
        cy.get('a[title="Delete"]').should("exist");
        cy.get('a[title="Edit"]').should("exist");
      });
    });
  });
});
