import { LoginPage } from "../../../page-objects/pmtool/login_page";
import { ProjectsPage } from "../../../page-objects/pmtool/projects_page";

describe("Projects Page Atomic tests", () => {
  beforeEach(() => {
    new LoginPage()
      .openPmtool()
      .typeUsername(Cypress.env("pmtool_username"))
      .typePassword(Cypress.env("pmtool_password"))
      .clickLogin();
    new ProjectsPage().visit();
  });

  context("Title tests", () => {
    it("Title is visible", () => {
      new ProjectsPage().titleIsVisible();
    });

    it("Title has text Projects", () => {
      new ProjectsPage().titleHasText("Projects");
    });
  });

  context("Filters box tests", () => {
    it("Filters box is visible", () => {
      new ProjectsPage().filtersBoxIsVisible();
    });

    it("Filters dropdown is visible", () => {
      new ProjectsPage().filtersDropdownVisible();
    });

    it("Filters Add button is visible", () => {
      new ProjectsPage().filtersAddButtonVisible();
    });

    it("Filters Title is visible", () => {
      new ProjectsPage().filtersTitleVisible();
    });

    it("Filters Title has text", () => {
      new ProjectsPage().filtersTitleHasText("Applied Filters");
    });

    it("Filters Remove all button is visible", () => {
      new ProjectsPage().filtersRemoveAllButtonVisible();
    });

    it("Filters Project Button is visible", () => {
      new ProjectsPage().filterProjectButtonVisible();
    });

    it("Filters Actual configuration is visible", () => {
      new ProjectsPage().filtersActualConfigurationVisible();
    });
  });

  it("Search Input is visible", () => {
    new ProjectsPage().searchInputIsVisible();
  });

  it("Search button is visible", () => {
    new ProjectsPage().searchButtonIsVisible();
  });

  it("Add Project button is visible", () => {
    new ProjectsPage().addProjectButtonIsVisible();
  });

  it("With Selected dropdown is visible", () => {
    new ProjectsPage().withSelectedDropdownIsVisible();
  });
  //
  it("Import button is visible", () => {
    new ProjectsPage().importButtonIsVisible();
  });
});
