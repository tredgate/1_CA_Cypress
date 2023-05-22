import { LoginPage } from "../../../prep/page-objects/prep_login_page";
import { ProjectsTasksPage } from "../../../prep/page-objects/projects_tasks_page";
import { UsersPage } from "../../../prep/page-objects/users_page";

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
      new UsersPage().titleIsVisible();
    });

    it("Title has text", () => {
      new UsersPage().titleHasText("Users");
    });
  });

  context("Add user button tests", () => {
    it("Add user button is visible", () => {
      new UsersPage().addUserButtonIsVisible();
    });

    it("Add user button has text", () => {
      new UsersPage().addUserButtonHasText("Add User");
    });
  });
});
