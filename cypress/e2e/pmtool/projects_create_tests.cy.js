import { LoginPage } from "../../page-objects/pmtool/login_page";

describe("Creating Projects tests", () => {
  it("Create new Project with name", { tags: "@e2e" }, () => {
    new LoginPage()
      .openPmtool()
      .typeUsername("fifka_petr")
      .typePassword("Tredgate2023")
      .clickLogin()
      .clickProjects()
      .clickNewProjectButton()
      .typeProjectName("blabla5450")
      .clickSaveButton()
      .clickProfile()
      .clickLogout();
  });
});
