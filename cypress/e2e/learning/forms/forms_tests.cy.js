describe("Forms tests", () => {
  beforeEach(() => {
    cy.visit("http://tredgate.com/webtrain/registration.html");
  });

  it("Check radio button", () => {
    cy.get("input[name='subscription']").check("basic");
    cy.get("#basic").should("be.checked");
  });

  it("Check 2 interests", () => {
    cy.get('input[name="interests[]"]').check("sports");
    cy.get('input[name="interests[]"]').check("music");
    cy.get("#interests-music").should("be.checked");
    cy.get("#interests-sports").should("be.checked");
    //Zakliknout 2 checkboxy v ten samý čas
    cy.get('input[name="interests[]').check(["travel", "reading"]);
  });

  it("Check and uncheck checkbox", () => {
    cy.get('input[name="interests[]"]').check("sports");
    cy.get('input[name="interests[]"]').check("music");
    cy.get('input[name="interests[]"]').uncheck("sports");
    cy.get('input[name="interests[]"]').uncheck("music");
    cy.get("#interests-music").should("not.be.checked");
    cy.get("#interests-sports").should("not.be.checked");
  });

  it("Clean and fill name", () => {
    cy.get("#name").clear().type("Petr Fifka");
    cy.get("#name").should("have.value", "Petr Fifka");
  });

  it("Select female gender", () => {
    cy.get("#gender").select("female");
    cy.get("#gender").should("have.value", "female");
  });

  it("Submit form", () => {
    cy.get("#myForm").submit();
    cy.get("#message-box")
      .should("be.visible")
      .and("have.text", "Form submitted successfully!");
  });

  it("Upload file", () => {
    let fileName = "C:/Users/tiash/Downloads/proTEST_transparent_navy (2).png";
    cy.get("#file-upload").selectFile(fileName);
  });

  it("Upload file fixtures", () => {
    cy.fixture("test.txt", { encoding: null }).as("uploadFile");
    cy.get("#file-upload").selectFile("@uploadFile");
  });

  it.only("Type date", () => {
    cy.get("#datepicker").type("1990-04-30");
    cy.get("#datepicker").should("have.value", "1990-04-30");
  });
});
