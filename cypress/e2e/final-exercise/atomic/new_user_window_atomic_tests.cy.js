import { LoginPage } from "../../../page-objects/pmtool/login_page";
import { NewUserWindowPage } from "../../../page-objects/pmtool/new_user_window_page";

describe("New User Window Atomic Tests", { testIsolation: false }, () => {
  before(() => {
    new LoginPage()
      .openPmtool()
      .typeUsername(Cypress.env("pmtool_username"))
      .typePassword(Cypress.env("pmtool_password"))
      .clickLogin()
      .clickUsers()
      .clickAddUserButton();
  });
  it("Username Input is Visible", () => {
    new NewUserWindowPage().usernameInput.isVisible();
  });

  it("Username Input is required", () => {
    new NewUserWindowPage().usernameRequiredLabel.isVisible();
  });

  it("Password Input is Visible", () => {
    new NewUserWindowPage().passwordInput.isVisible();
  });

  it("Password Input is required", () => {
    new NewUserWindowPage().passwordRequiredLabel.isVisible();
  });

  it("Email Input is Visible", () => {
    new NewUserWindowPage().emailInput.isVisible();
  });

  it("Email Input is required", () => {
    new NewUserWindowPage().emailRequiredLabel.isVisible();
  });

  it("First Name Input is Visible", () => {
    new NewUserWindowPage().firstNameInput.isVisible();
  });

  it("First Name Input is required", () => {
    new NewUserWindowPage().firstNameRequiredLabel.isVisible();
  });

  it("Last Name Input is Visible", () => {
    new NewUserWindowPage().lastNameInput.isVisible();
  });

  it("Last Name is required", () => {
    new NewUserWindowPage().lastNameRequiredLabel.isVisible();
  });

  it("Access Group Select is visible", () => {
    new NewUserWindowPage().accessGroupSelect.isVisible();
  });

  it("Skin Div is Visible", () => {
    new NewUserWindowPage().skinDiv.isVisible();
  });

  it("Photo Upload Anchor is Visible", () => {
    new NewUserWindowPage().photoUploadAnchor.isVisible();
  });

  it("Language Select is Visible", () => {
    new NewUserWindowPage().languageSelect.isVisible();
  });

  it("Close Button Bottom is Visible", () => {
    new NewUserWindowPage().closeButtonBottom.scrollIntoView().isVisible();
  });

  //! This is required in test isolation false mode
  after(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });
});
