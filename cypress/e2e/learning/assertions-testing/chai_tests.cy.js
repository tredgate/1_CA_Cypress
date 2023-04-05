import { LoginPage } from "../../../page-objects/pmtool/login_page";

describe("Chai Tests", () => {
  beforeEach(() => {
    new LoginPage().openPmtool();
  });

  it("Login header has text 'Login'", () => {
    cy.get(".form-title").should("have.text", "Login");
  });

  //! Failing test
  it("Login header has text 'Login2'", () => {
    cy.get(".form-title").should("have.text", "Login2");
  });

  it("Anchor forget_password has text 'Password forgotten?'", () => {
    cy.get("#forget_password").should("have.text", "Password forgotten?");
  });

  it('Username input has value "username"', () => {
    new LoginPage().typeUsername("username");
    cy.get("#username").should("have.value", "username");
  });

  it('Email in Lost password page has valua "petr.fifka@tredgate.cz"', () => {
    let email = "petr.fifka@tredgate.cz";
    new LoginPage().clickLostPassword().typeEmail(email);
    cy.get(":nth-child(3) > .input-icon > .form-control").should(
      "have.value",
      email
    );
  });

  it('Username input has class "form-control"', () => {
    cy.get("#username").should("have.class", "form-control");
  });

  it("Login button has class 'btn-info'", () => {
    cy.get(".btn").should("have.class", "btn-info");
  });

  it("Login button is visible", () => {
    cy.get(".btn").should("be.visible");
  });

  it("App header is visible in Main Page", () => {
    new LoginPage()
      .typeUsername("fifka_petr")
      .typePassword("Tredgate2023")
      .clickLogin();
    cy.get(".navbar-brand").should("be.visible");
  });

  it("Login button exist", () => {
    cy.get(".btn").should("exist");
  });

  it("Lost password anchor exist", () => {
    cy.get("#forget_password").should("exist");
  });

  it("Username has placeholder 'Username'", () => {
    cy.get("#username").should("have.attr", "placeholder", "Username");
  });

  it("Password has placeholder 'Password'", () => {
    cy.get("#password").should("have.attr", "placeholder", "Password");
  });
});
