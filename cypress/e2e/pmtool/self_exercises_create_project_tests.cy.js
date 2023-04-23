import { LoginPage } from "../../page-objects/pmtool/login_page";
import { ProjectsPage } from "../../page-objects/pmtool/projects_page";

describe("Self-exercise - create new project, task", () => {
  beforeEach(() => {
    new LoginPage()
      .openPmtool()
      .typeUsername("fifka_petr")
      .typePassword("Tredgate2023")
      .clickLogin()
      .clickProjects();
  });
  it("Create new Project, Task, check project info", () => {
    let randomNumber = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    let projectName = `FIFKA_self-exercise_${randomNumber}`;
    let taskName = `FIFKA_TASK_${randomNumber}`;
    cy.fixture("test.txt", { encoding: null }).as("projectAttachFile");

    new ProjectsPage()
      .clickNewProjectButton()
      .selectPriority("High")
      .selectStatus("Open")
      .typeProjectName(projectName)
      .attachFile()
      .fillStartDate("2023-04-19")
      .clickSaveButton()
      .clickAddTask()
      .selectType("Change")
      .selectStatus("Open")
      .typeTaskName(taskName)
      .assignToPetr()
      .clickSave()
      .clickProjects();
  });
});
