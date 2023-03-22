import { HomePage } from "../../prep/page-objects/prep_homepage";
import { LoginPage } from "../../prep/page-objects/prep_login_page";

describe("Login and Logout Tests", () => {
  it("Login to pmtool", () => {
    let pmtoolLoginPage = new LoginPage();
    pmtoolLoginPage.openPmtool();
    pmtoolLoginPage.typeUsername("fifka_petr");
    pmtoolLoginPage.typePassword("Tredgate2023");
    pmtoolLoginPage.clickLoginButton();
  });

  it("Login and Logout test", () => {
    let pmtoolLoginPage = new LoginPage();
    let homepage = new HomePage();
    pmtoolLoginPage.openPmtool();
    pmtoolLoginPage.typeUsername("fifka_petr");
    pmtoolLoginPage.typePassword("Tredgate2023");
    pmtoolLoginPage.clickLoginButton();
    homepage.clickProfile();
    homepage.clicklogout();
  });
});
