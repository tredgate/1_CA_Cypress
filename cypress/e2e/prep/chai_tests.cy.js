import { LoginPage } from "../../page-objects/pmtool/login_page";

describe("Chai Tests", () => {
  beforeEach(() => {
    new LoginPage().openPmtool();
  });
  it("Login header has text ‘Login’", () => {
    cy.get("h3.form-title").should("have.text", "Login");
  });

  //! Failing
  it("Login header has text ‘Login2’", () => {
    cy.get("h3.form-title").should("have.text", "Login2");
  });

  it("chai_tests.cy.js", () => {
    let username = "fifka_petr";
    new LoginPage().typeUsername(username);
    cy.get("#username").should("have.value", username);
  });

  it("Username input has form-control class", () => {
    cy.get("#password").should("have.class", "form-control");
  });

  it("Login button is visible.", () => {
    cy.get(".btn").should("be.visible");
  });

  it("Login button exist", () => {
    cy.get(".btn").should("exist");
  });

  it.only("Username has placeholder 'Username'", () => {
    cy.get("#username").should("have.attr", "placeholder", "Username");
  });
});
