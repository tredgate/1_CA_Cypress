describe("CHALLENGE: Fill all inputs in Account/create", () => {
  it("Open Automation Test Store page account/create and fill all inputs", () => {
    cy.visit("https://automationteststore.com/index.php?rt=account/create");
    cy.get("#AccountFrm_firstname").type("First_name");
    cy.get("#AccountFrm_lastname").type("Last_name");
    cy.get("#AccountFrm_email").type("example@test.com");
    cy.get("#AccountFrm_telephone").type("+1-555-555-5555");
    cy.get("#AccountFrm_fax").type("+1-555-555-5555");
    cy.get("#AccountFrm_company").type("ACME Inc.");
    cy.get("#AccountFrm_address_1").type("123 Main St.");
    cy.get("#AccountFrm_address_2").type("Suite 456");
    cy.get("#AccountFrm_city").type("Anytown");
    cy.get("#AccountFrm_postcode").type("12345");
    cy.get("#AccountFrm_loginname").type("exampleuser");
    cy.get("#AccountFrm_password").type("password123");
    cy.get("#AccountFrm_confirm").type("password123");
  });
});
