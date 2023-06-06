import newProjectData from "../../../fixtures/prep/new_project_data.json";
import { faker } from "@faker-js/faker";
import moment from "moment";
import { LoginPage } from "../../../page-objects/pmtool/login_page";
import { NewProjectWindowPage } from "../../../page-objects/pmtool/new_project_window_page";

describe("Data Driven Tests", () => {
  beforeEach(() => {
    new LoginPage()
      .openPmtool()
      .typeUsername(Cypress.env("pmtool_username"))
      .typePassword(Cypress.env("pmtool_password"))
      .clickLogin()
      .clickProjects()
      .clickNewProjectButton();
  });

  newProjectData.forEach((project) => {
    it(`DDT project: ${project.description}`, () => {
      //setup test data
      const project_name =
        project.name_prefix + faker.number.int({ max: 99999 });
      const start_date = getStartDate(project.start_date);

      //test steps
      new NewProjectWindowPage()
        .selectPriority(project.priority)
        .selectStatus(project.status)
        .typeProjectName(project_name)
        .fillStartDate(start_date)
        .clickSaveButton();
    });
  });
});

function getStartDate(start_date) {
  switch (start_date) {
    case "today":
      //získej dnešní datum s formátem: yyyy-mm-dd
      return moment().format("YYYY-MM-DD");
    case "tomorrow":
      //získej zítřejší datum s formátem: yyyy-mm-dd
      return moment().add(1, "days").format("YYYY-MM-DD");
    case "yesterday":
      //získej včerejší datum s formátem: yyyy-mm-dd
      return moment().subtract(1, "days").format("YYYY-MM-DD");
    default:
      //toto je scénář, který se vykonná, pokud není zadáno nic z výše uvedeného
      //vrátíme chybu, že nebylo zadáno platné datum
      throw new Error("Invalid start date");
  }
}
