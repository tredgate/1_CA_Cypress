import { LoginPage } from "../../../page-objects/pmtool/login_page";

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
      new LoginPage().typeUsername("test value").usernameHasValue("test value");
    });
  });

  context("Password input tests", () => {
    it("Password is visible", () => {
      new LoginPage().passwordIsVisible();
    });

    it("Password has placeholder", () => {
      new LoginPage().passwordHasPlaceholder("Password");
    });
  });

  context("Logo image tests", () => {
    it("Logo is visible", () => {
      new LoginPage().logoIsVisible();
    });
  });
});
