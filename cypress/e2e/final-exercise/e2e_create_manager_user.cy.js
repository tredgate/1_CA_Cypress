import { LoginPage } from "../../page-objects/pmtool/login_page";
import { faker } from "@faker-js/faker";
import { NewUserWindowPage } from "../../page-objects/pmtool/new_user_window_page";

describe("FINAL: E2E - create Manager user and login", () => {
  beforeEach(() => {
    new LoginPage()
      .openPmtool()
      .typeUsername(Cypress.env("pmtool_username"))
      .typePassword(Cypress.env("pmtool_password"))
      .clickLogin()
      .clickUsers()
      .clickAddUserButton();
  });

  it("Create Manager user and login", () => {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const username = faker.internet.userName({
      firstName: firstName,
      lastName: lastName,
      allowSpecialCharacters: true,
    });
    const email = faker.internet.exampleEmail({
      firstName: firstName,
      lastName: lastName,
      allowSpecialCharacters: true,
    });
    const role = "Manager";
    const password = "Tredgate2023";

    cy.log(
      `User data generated: \n First name: ${firstName} \n Last name: ${lastName} \n Username: ${username} \n Email: ${email} \n Role: ${role}`
    );

    new NewUserWindowPage()
      .typeEmail(email)
      .typeFirstName(firstName)
      .typeLastName(lastName)
      .typeUsername(username)
      .selectRole("Manager")
      .typePassword(password)
      .clickSave()
      .clickProfile()
      .clickLogout()
      .typeUsername(username)
      .typePassword(password)
      .clickLogin()
      .userNameHasFullName(`${firstName} ${lastName}`);
  });
});
