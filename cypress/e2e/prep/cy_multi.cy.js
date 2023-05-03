describe("Multi Domain test", () => {
  it.only("cy.origin test", () => {
    cy.visit("http://tredgate.com/pmtool");
    cy.get("#username").should("be.visible");
    cy.origin("https://tredgate.cz", () => {
      cy.visit("/");
      cy.get(
        "article[id='post-39'] div[class='panel-content'] p:nth-child(1)"
      ).should("be.visible");
    });
  });
});
