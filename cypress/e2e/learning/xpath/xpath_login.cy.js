describe("Login tests with XPath selectors", () => {
  it("Login with Xpath Selectors", () => {
    cy.visit("http://tredgate.com/pmtool/");
    cy.xpath("//input[@id='username']").type("fifka_petr");
    cy.xpath("//input[@id='password']").type("Tredgate2023");
    cy.xpath("//button[@type='submit']").click();
    cy.xpath("//li[@id='user_dropdown']").click();
    cy.xpath("//li[@id='logout']").click();
  });
});
