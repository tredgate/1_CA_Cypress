import { HomePage } from "../../../prep/page-objects/prep_homepage";
import { LoginPage } from "../../../prep/page-objects/prep_login_page";

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

  it("Open Pages via Polymorphism Classes", () => {
    new HomePage().clickProjects().clickDashboard();
  });
});
