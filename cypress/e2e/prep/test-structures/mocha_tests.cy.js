import { HomePage } from "../../../page-objects/pmtool/home_page";
import { LoginPage } from "../../../page-objects/pmtool/login_page";

describe("Mocha tests", () => {
  beforeEach(() => {
    cy.viewport(800, 600);
    cy.log("runs before every test");
  });

  let loginPage = new LoginPage();

  it("Visit pmtool", () => {
    new LoginPage().openPmtool();
  });

  it("Pmtool login", () => {
    new LoginPage()
      .openPmtool()
      .typeUsername("fifka_petr")
      .typePassword("Tredgate2023")
      .clickLogin();
  });

  afterEach(() => {
    cy.log("Function afterEach called");
  });
});
