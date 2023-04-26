describe("Mouse actions tests", () => {
  it("Scroll into view", () => {
    cy.visit("http://tredgate.com/webtrain/");
    cy.get("body h1").scrollIntoView().should("be.visible");
  });
});
