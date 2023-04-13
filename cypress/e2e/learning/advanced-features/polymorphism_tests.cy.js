import { HomePage } from "../../../page-objects/pmtool/home_page";
import { LoginPage } from "../../../page-objects/pmtool/login_page";

describe("Polymorphism tests", () => {
  beforeEach(() => {
    new LoginPage()
      .openPmtool()
      .typeUsername("fifka_petr")
      .typePassword("Tredgate2023")
      .clickLogin();
  });
  it("Logout via polymorphism class", () => {
    new HomePage().clickProfile().clickLogout();
  });

  it("Logout from Projects page", () => {
    new HomePage().clickProjects().clickProfile().clickLogout();
  });

  it("Open Pages via Polymorphism Classes", () => {
    new HomePage()
      .clickProjects()
      .clickDashboard()
      .clickProfile()
      .clickLogout();
  });

  it("Open pages: Projects, Dashboard, Users and logout", () => {
    new HomePage()
      .clickProjects()
      .clickDashboard()
      .clickUsers()
      .clickProfile()
      .clickLogout();
  });
});
