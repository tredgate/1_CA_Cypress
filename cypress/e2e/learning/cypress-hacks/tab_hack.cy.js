describe("Tab hack checks", () => {
  beforeEach(() => {
    cy.visit("http://www.webdriveruniversity.com/");
  });

  it("Modify tab to open in same screen", () => {
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
    //! nebude fungovat: cy.get("#contact-us").click();
    cy.get("input[name='first_name']").type("Petr");
  });
});
