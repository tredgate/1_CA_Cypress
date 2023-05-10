import { LoginPage } from "../../page-objects/pmtool/login_page";

describe("Login Page atomic tests", () => {
  it("Type username and login", () => {
    new LoginPage()
      .openPmtool()
      .typeUsername("admin")
      .typePassword("admin")
      .clickLoginButton();
  });
});
