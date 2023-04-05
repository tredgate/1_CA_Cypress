import { LoginPage } from "../../../page-objects/pmtool/login_page";

describe("Mocha Tests", () => {
  beforeEach(() => {
    cy.viewport(800, 600);
    cy.log("runs before every test");
    new LoginPage().openPmtool();
  });

  it("Visit pmtool", () => {});

  it("Visit pmtool and login", () => {
    new LoginPage()
      .typeUsername("fifka_petr")
      .typePassword("Tredgate2023")
      .clickLogin();
  });

  afterEach(() => {
    cy.log("Function afterEach called");
  });
});
