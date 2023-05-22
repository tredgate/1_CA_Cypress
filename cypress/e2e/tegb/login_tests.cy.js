import { TegBLoginPage } from "../../page-objects/tegb/tegb_login_page";

describe("TegB Login Tests", () => {
  beforeEach(() => {
    new TegBLoginPage().openTegB();
  });
  it("Success login test", () => {
    new TegBLoginPage()
      .typeLogin(Cypress.env("tegb_username"))
      .typePassword(Cypress.env("tegb_password"))
      .clickLogin();
  });
});
