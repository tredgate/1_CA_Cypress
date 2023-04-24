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

    let date = new Date();

    new ProjectsPage()
      .clickNewProjectButton()
      .selectPriority("High")
      .selectStatus("Open")
      .typeProjectName(projectName)
      .attachFile()
      .fillStartDate(date.toLocaleDateString("en-CA")) //format: yyyy-MM-dd
      .clickSaveButton()
      .clickAddTask()
      .selectType("Change")
      .selectStatus("Open")
      .typeTaskName(taskName)
      .assignToPetr()
      .clickSave()
      .clickProjects()
      .searchProject(projectName)
      .priorityHasText("High")
      .statusHasText("Open")
      .projectNameHasText(projectName)
      .dateAddedContainsText(date.toLocaleDateString("en-GB")) //format: dd/MM/yyyy
      .startDateHasText(date.toLocaleDateString("en-GB")) //format: dd/MM/yyyy
      .createdByHasText("Petr Fifka");
  });
});
