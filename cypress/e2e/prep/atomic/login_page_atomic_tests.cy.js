import { LoginPage } from "../../../prep/page-objects/prep_login_page";

describe("Login Page Atomic Tests", () => {
  beforeEach(() => {
    new LoginPage().openPmtool();
  });

  context("Username input tests", () => {
    it("Username is visible", () => {
      new LoginPage().usernameIsVisible();
    });

    it("Username has placeholder", () => {
      new LoginPage().usernameHasPlaceholder("Username");
    });

    it("Username has value after type", () => {
      new LoginPage().typeUsername("test").usernameHasValue("test");
    });
  });
});
