describe("Api Display Tests", () => {
  it("Check Login APIs", () => {
    cy.visit("http://localhost:3002");
    cy.get('[data-testid="username"]').type(Cypress.env("tegb_username"));
    cy.get('[data-testid="password"]').type(Cypress.env("tegb_password"));
    cy.get('[data-testid="log_in"]').click();
  });

  it("Basic Intercept Test", () => {
    // cy.intercept("http://localhost:3000/auth/login").as("login_api");
    cy.intercept("/auth/login").as("login_api");
    // cy.intercept("/auth/**");
    cy.visit("http://localhost:3002");
    cy.get('[data-testid="username"]').type(Cypress.env("tegb_username"));
    cy.get('[data-testid="password"]').type(Cypress.env("tegb_password"));
    cy.get('[data-testid="log_in"]').click();
  });

  it("Wait for Login", () => {
    cy.intercept("/auth/login").as("login_api");
    cy.visit("http://localhost:3002");
    cy.get('[data-testid="username"]').type(Cypress.env("tegb_username"));
    cy.get('[data-testid="password"]').type(Cypress.env("tegb_password"));
    cy.get('[data-testid="log_in"]').click();
    cy.wait("@login_api");
  });

  it("Login Api has POST request method", () => {
    cy.intercept("/auth/login").as("login_api");
    cy.visit("http://localhost:3002");
    cy.get('[data-testid="username"]').type(Cypress.env("tegb_username"));
    cy.get('[data-testid="password"]').type(Cypress.env("tegb_password"));
    cy.get('[data-testid="log_in"]').click();
    //! Test na POST
    cy.wait("@login_api").its("request.method").should("eq", "POST");
  });

  it("Login Api has 201 status code", () => {
    cy.intercept("/auth/login").as("login_api");
    cy.visit("http://localhost:3002");
    cy.get('[data-testid="username"]').type(Cypress.env("tegb_username"));
    cy.get('[data-testid="password"]').type(Cypress.env("tegb_password"));
    cy.get('[data-testid="log_in"]').click();
    //! Test na 201
    cy.wait("@login_api").its("response.statusCode").should("eq", 201);
  });

  it("access_token is present in login api response json body", () => {
    cy.intercept("/auth/login").as("login_api");
    cy.visit("http://localhost:3002");
    cy.get('[data-testid="username"]').type(Cypress.env("tegb_username"));
    cy.get('[data-testid="password"]').type(Cypress.env("tegb_password"));
    cy.get('[data-testid="log_in"]').click();
    //! Test na access_token is visible
    cy.wait("@login_api").its("response.body.access_token").should("exist");
  });

  it.only("Mock get Account API", () => {
    cy.intercept("/auth/login").as("login_api");
    cy.intercept("/accounts/user/**", { fixture: "mock_accounts.json" }).as(
      "get_account_api"
    );
    cy.visit("http://localhost:3002");
    cy.get('[data-testid="username"]').type(Cypress.env("tegb_username"));
    cy.get('[data-testid="password"]').type(Cypress.env("tegb_password"));
    cy.get('[data-testid="log_in"]').click();
    cy.wait("@login_api");
    cy.get('[data-testid="accounts_section_link"]').click();
  });
});
