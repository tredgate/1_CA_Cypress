describe("Operating with Cypress Tests", () => {
  it("Using debug", () => {
    cy.visit("http://tredgate.com/pmtool/");
    cy.get("#username").type("fifka_petr");
    cy.get("#password").type("Tredgate2023");
    cy.get(".btn").debug().click();
  });

  it.only("Using pause() function", () => {
    cy.visit("http://tredgate.com/pmtool/");
    cy.get("#username").type("fifka_petr");
    cy.get("#password").type("Tredgate2023");
    cy.get(".btn").pause().click();
  });
});
