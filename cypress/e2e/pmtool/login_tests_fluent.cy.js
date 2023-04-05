import { LoginPage } from "../../page-objects/pmtool/login_page";

describe("Fluent Login tests", () => {
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

  it("Open Lost Password page and return", () => {
    new LoginPage().clickLostPassword().clickBack();
  });
});
