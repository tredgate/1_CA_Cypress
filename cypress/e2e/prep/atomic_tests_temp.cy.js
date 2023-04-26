import { LoginPage } from "../../page-objects/pmtool/login_page";
import { ProjectsPage } from "../../page-objects/pmtool/projects_page";
import { ProjectsTasksPage } from "../../prep/page-objects/projects_tasks_page";

describe("Self-exercise - create new project, task", () => {
  beforeEach(() => {
    new LoginPage()
      .openPmtool()
      .typeUsername(Cypress.env("pmtool_username"))
      .typePassword(Cypress.env("pmtool_password"))
      .clickLogin();
  });
  it("Create new Project, Task, check project info", () => {
    new ProjectsTasksPage("94").visit();
  });

  context("Podsložka 1", () => {
    it("Test1 v podsložce 1", () => {});

    it("Test2 v podsložce 1", () => {});
  });

  context("Podsložka 2", () => {
    it("Test1 v podsložce 2", () => {});

    it("Test2 v podsložce 2", () => {});
  });
});
