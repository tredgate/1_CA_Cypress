import { LoginPage } from "../../prep/page-objects/prep_login_page";

describe("Login page tests", () => {
  beforeEach(() => {
    new LoginPage().openPmtool();
  });

  it("Page header has text 'Login'", () => {
    new LoginPage().pageHeaderHasText("Login");
  });

  it("Alert not exist after open pmtool", () => {
    new LoginPage().alertNotExist();
  });
});
