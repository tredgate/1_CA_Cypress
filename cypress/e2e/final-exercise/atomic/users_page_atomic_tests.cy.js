import { LoginPage } from "../../../page-objects/pmtool/login_page";
import { UsersPage } from "../../../page-objects/pmtool/users_page";

describe("New User Window Atomic Tests", { testIsolation: false }, () => {
  before(() => {
    new LoginPage()
      .openPmtool()
      .typeUsername(Cypress.env("pmtool_username"))
      .typePassword(Cypress.env("pmtool_password"))
      .clickLogin();
    new UsersPage().visit();
  });

  it("search dropdown button is visible", () => {
    new UsersPage().searchDropdownButton.isVisible();
  });

  it("page title is visible", () => {
    new UsersPage().pageTitle.isVisible();
  });

  it("add filter button is visible", () => {
    new UsersPage().addFilterButton.isVisible();
  });

  it("filter dropdown button is visible", () => {
    new UsersPage().filterDropdownButton.isVisible();
  });

  it("filter configuration anchor is visible", () => {
    new UsersPage().filterConfigurationAnchor.isVisible();
  });

  it("users table is visible", () => {
    new UsersPage().usersTable.isVisible();
  });

  //! This is required in test isolation false mode
  after(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });
});
