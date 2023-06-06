import { LoginPage } from "../../../page-objects/pmtool/login_page";
import { UsersPage } from "../../../page-objects/pmtool/users_page";

describe("Users page atomic tests", () => {
  beforeEach(() => {
    new LoginPage()
      .openPmtool()
      .typeUsername(Cypress.env("pmtool_username"))
      .typePassword(Cypress.env("pmtool_password"))
      .clickLogin();
    new UsersPage().visit();
  });

  context("Title tests", () => {
    it("Title is visible", () => {
      new UsersPage().page_title.isVisible();
    });

    it("Title has text", () => {
      new UsersPage().page_title.hasText("Users");
    });
  });

  context("Add user button tests", () => {
    it("Add user button is visible", () => {
      new UsersPage().addUserButton.isVisible();
    });

    it("Add user button has text", () => {
      new UsersPage().addUserButton.hasText("Add User");
    });
  });
});
