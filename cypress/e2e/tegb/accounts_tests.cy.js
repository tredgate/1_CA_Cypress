import { DashboardPage } from "../../page-objects/tegb/dashboard_page";
import { TegBLoginPage } from "../../page-objects/tegb/tegb_login_page";

describe("Teg#B Accounts tests", () => {
  beforeEach(() => {
    new TegBLoginPage()
      .openTegB()
      .typeLogin(Cypress.env("tegb_username"))
      .typePassword(Cypress.env("tegb_password"))
      .clickLogin()
      .waitForLoginApi();
  });
  it("Accounts Title has text", () => {
    new DashboardPage()
      .clickAccounts()
      .waitForAccountsApi()
      .titleHasText("Account");
  });
});
