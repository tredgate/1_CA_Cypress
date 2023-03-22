describe("Operating with Cypress Tests", () => {
  it.only("Login test", () => {
    cy.visit("http://tredgate.com/pmtool/");
    cy.get("#username").type("fifka_petr");
    cy.get("#password").type("Tredgate2023");
    cy.get(".btn").click();
  });

  it("Test failure - element not present", () => {
    cy.visit("http://tredgate.com/pmtool/");
    cy.get("#username2");
  });
});
