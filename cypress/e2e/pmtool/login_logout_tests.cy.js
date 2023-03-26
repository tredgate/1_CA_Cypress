import { HomePage } from "../../page-objects/pmtool/home_page";
import { LoginPage } from "../../page-objects/pmtool/login_page";

describe("Login and Logout Tests", () => {
  it("Login to pmtool", () => {
    let loginPage = new LoginPage();
    loginPage.openPmtool();
    loginPage.typeUsername("fifka_petr");
    loginPage.typePassword("Tredgate2023");
    loginPage.clickLogin();
  });

  it.only("Login and Logout test", () => {
    let loginPage = new LoginPage();
    let homePage = new HomePage();

    loginPage.openPmtool();
    loginPage.typeUsername("fifka_petr");
    loginPage.typePassword("Tredgate2023");
    loginPage.clickLogin();
    homePage.clickProfile();
    homePage.clickLogout();
  });
});
