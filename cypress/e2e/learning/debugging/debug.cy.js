describe("Debugging", () => {
  it("Debugging pmtool", () => {
    cy.visit("http://tredgate.com/pmtool/");
    cy.get("#username").type("fifka_petr");
    cy.get("#password").type("Tredgate2023");
    cy.get(".btn").debug().click();
  });

  it.only("Using pause()", () => {
    cy.visit("http://tredgate.com/pmtool/");
    cy.get("#username").type("fifka_petr");
    cy.get("#password").type("Tredgate2023");
    cy.get(".btn").pause().click();
  });
});
