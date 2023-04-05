import { LoginPage } from "../../page-objects/pmtool/login_page";

describe("Login page tests", () => {
  beforeEach(() => {
    new LoginPage().openPmtool();
  });

  it("Page header has text 'Login'", () => {
    new LoginPage().pageHeaderHasText("Login");
  });

  it('Username has "Username" as placeholder', () => {
    new LoginPage().usernameHasPlaceholder("Username");
  });

  it('Password has "Password" as placeholder', () => {
    new LoginPage().passwordHasPlaceholder("Password");
  });

  it("Logo is visible", () => {
    new LoginPage().logoIsVisible();
  });
});
