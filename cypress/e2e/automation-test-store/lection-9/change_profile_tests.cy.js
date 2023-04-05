import { HomePage } from "../../../page-objects/automation-test-store/homepage";

describe("CHALLENGE: Change profile tests", () => {
  it("Change phone test", () => {
    new HomePage()
      .openAutomationTestStore()
      .clickLoginOrRegister()
      .typeUsername("petrtest")
      .typePassword("123456")
      .clickLogin()
      .clickEditAccountDetails()
      .clearPhone()
      .typePhone("1213456")
      .clickContinue()
      .clickLogoff();
  });
});
