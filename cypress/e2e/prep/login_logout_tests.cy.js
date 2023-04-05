import { LoginPage } from "../../prep/page-objects/prep_login_page";

describe("Login and Logout Tests", () => {
  beforeEach(() => {
    new LoginPage().openPmtool();
  });

  it("Login to pmtool using Fluent API test", () => {
    new LoginPage()
      .typeUsername("fifka_petr")
      .typePassword("Tredgate2023")
      .clickLogin()
      .clickProfile()
      .clickLogout();
  });
});
