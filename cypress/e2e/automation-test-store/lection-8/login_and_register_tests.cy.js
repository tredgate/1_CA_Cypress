import { HomePage } from "../../../page-objects/automation-test-store/homepage";
import { LoginOrRegisterPage } from "../../../page-objects/automation-test-store/login_or_register_page";
import { RegistrationPage } from "../../../page-objects/automation-test-store/register_page";

describe("CHALLENGE: Login or register test", () => {
  it("Open Login or Register and click continue test", () => {
    let homePage = new HomePage();
    let loginOrRegisterPage = new LoginOrRegisterPage();
    homePage.openAutomationTestStore();
    homePage.clickLoginOrRegister();
    loginOrRegisterPage.clickContinueToRegistration();
  });

  it.only("Fill all text inputs in registration test", () => {
    let homePage = new HomePage();
    let loginOrRegisterPage = new LoginOrRegisterPage();
    let registrationPage = new RegistrationPage();

    homePage.openAutomationTestStore();
    homePage.clickLoginOrRegister();
    loginOrRegisterPage.clickContinueToRegistration();
    registrationPage.enterFirstName("John");
    registrationPage.enterLastName("Doe");
    registrationPage.enterEmail("johndoe@example.com");
    registrationPage.enterTelephone("+1-555-555-5555");
    registrationPage.enterFax("+1-555-555-5555");
    registrationPage.enterCompany("ACME Inc.");
    registrationPage.enterAddress1("123 Main St.");
    registrationPage.enterAddress2("Suite 456");
    registrationPage.enterCity("Anytown");
    registrationPage.enterPostcode("12345");
    registrationPage.enterLoginName("johndoe");
    registrationPage.enterPassword("password123");
    registrationPage.enterConfirmPassword("password123");
    registrationPage.clickCreateAccountButton();
  });
});
