import { LoginPage } from "../../../prep/page-objects/prep_login_page";

describe("Fluent Login tests", () => {
  it("Login to pmtool using Fluent API test", () => {
    new LoginPage()
      .typeUsername("fifka_petr")
      .typePassword("Tredgate2023")
      .clickLoginButton()
      .clickProfile()
      .clicklogout();
  });
});
